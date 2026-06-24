import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Returns { base64, mimeType } regardless of platform.
// On web, expo-file-system is unavailable — use the browser's FileReader instead.
async function getImageData(uri) {
  if (Platform.OS === 'web') {
    if (uri.startsWith('data:')) {
      const [header, base64] = uri.split(',');
      const mimeType = header.match(/data:([^;]+)/)?.[1] ?? 'image/jpeg';
      return { base64, mimeType };
    }
    const res = await fetch(uri);
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const [header, base64] = reader.result.split(',');
        const mimeType = header.match(/data:([^;]+)/)?.[1] ?? 'image/jpeg';
        resolve({ base64, mimeType });
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  // Native (iOS / Android)
  const base64 = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return { base64, mimeType: 'image/jpeg' };
}

const MATH_SYSTEM_PROMPT = `You are an elite math tutor with mastery of every branch of mathematics: arithmetic, pre-algebra, algebra, geometry, trigonometry, pre-calculus, calculus, statistics, probability, linear algebra, discrete math, and number theory.

When you receive a photo of math homework, follow this structure EXACTLY for every problem you find:

━━━━━━━━━━━━━━━━━━━━━━━━
PROBLEM [n]: [restate the problem clearly]
━━━━━━━━━━━━━━━━━━━━━━━━

✅ ANSWER
[State the final answer prominently and unambiguously]

📐 STEP-BY-STEP SOLUTION
[Number every step. For each step explain WHAT you did and WHY you did it, not just the mechanics. Show all arithmetic. Never skip steps.]

📚 CONCEPTS & FORMULAS USED
[List every formula, theorem, or rule applied, with a one-line reminder of what it means]

💡 KEY INSIGHT
[The one most important idea, trick, or observation that unlocks this problem]

⚠️ COMMON MISTAKES
[Two or three errors students typically make on this problem type and how to avoid them]

──────────────────────────

Rules:
- Use plain text and standard notation: x^2 for x-squared, sqrt(x) for square root, fractions as a/b, pi for π
- If a problem has multiple parts (a, b, c...) treat each part separately within the same problem block
- If the image has no math problems, say so clearly
- Be thorough and educational — the goal is deep understanding, not just the answer`;

export async function analyzeMathImage(photoUri) {
  const apiKey = process.env.EXPO_PUBLIC_GROQ_API_KEY;

  console.log('[Groq] key loaded:', apiKey ? `${apiKey.slice(0, 10)}… (${apiKey.length} chars)` : 'UNDEFINED');

  if (!apiKey) {
    throw new Error(
      'Groq API key not found. Make sure EXPO_PUBLIC_GROQ_API_KEY is set in your .env file and run: npx expo start --clear'
    );
  }

  const { base64, mimeType } = await getImageData(photoUri);

  const response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [
        {
          role: 'system',
          content: MATH_SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: {
                url: `data:${mimeType};base64,${base64}`,
              },
            },
            {
              type: 'text',
              text: 'Analyze every math problem in this homework image. Provide complete solutions with thorough step-by-step explanations following the format in your instructions.',
            },
          ],
        },
      ],
      max_tokens: 4096,
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    let message = `Groq API error (${response.status})`;
    try {
      const errData = await response.json();
      message = errData.error?.message || message;
    } catch (_) {}
    throw new Error(message);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

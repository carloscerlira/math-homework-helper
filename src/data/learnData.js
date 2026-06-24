export const LEVELS = [
  { id: 'all',        label: 'All',         color: '#6C63FF' },
  { id: 'elementary', label: 'Elementary',  color: '#43C59E' },
  { id: 'high',       label: 'High School', color: '#6C63FF' },
  { id: 'college',    label: 'College',     color: '#FF6584' },
];

export const COURSES = [
  // ── ARITHMETIC ────────────────────────────────────────────────────────────
  {
    id: 'arithmetic',
    name: 'Arithmetic',
    icon: '🔢',
    level: 'elementary',
    color: '#43C59E',
    bg: '#E8FAF5',
    description: 'The foundation of all mathematics — numbers, operations, fractions, and percentages.',
    topics: [
      {
        name: 'Numbers & Place Value',
        lessons: [
          {
            title: 'The Place Value System',
            content: 'Every digit in a number has a value that depends on its position. Moving from right to left, the positions are: ones, tens, hundreds, thousands, ten-thousands, and so on — each position is exactly 10 times greater than the one to its right. For example, in the number 4,852, the digit 4 is in the thousands place, so it represents 4,000; the 8 represents 800; the 5 represents 50; and the 2 represents 2. Written out: 4,852 = 4,000 + 800 + 50 + 2. This "expanded form" shows exactly what each digit is contributing to the total value.',
          },
          {
            title: 'Comparing & Ordering Numbers',
            content: 'To compare two whole numbers, first count their digits — the number with more digits is always larger (for example, 1,000 > 999 because 1,000 has 4 digits and 999 has only 3). If both numbers have the same number of digits, compare them from the leftmost digit to the right, stopping at the first digit that differs. For 4,728 vs. 4,759: the thousands digit (4) and hundreds digit (7) match, but in the tens place 2 < 5, so 4,728 < 4,759. We use three symbols to record comparisons: < (less than), > (greater than), and = (equal to).',
          },
          {
            title: 'Rounding Numbers',
            content: 'Rounding replaces a number with a close "round" value that is easier to work with. To round to a given place, look at the digit one position to its right — if it is 5 or greater, round up (add 1 to the target digit); if it is 4 or less, round down (keep the target digit). All digits to the right of the target become zero. Example: to round 4,372 to the nearest hundred, look at the tens digit (7 ≥ 5), so round up → 4,400. To round 4,332 to the nearest hundred, look at the tens digit (3 < 5), so round down → 4,300. Rounding is used daily for estimating prices, distances, and quantities.',
          },
          {
            title: 'Negative Numbers & the Number Line',
            content: 'The number line extends in both directions from zero. Positive numbers (1, 2, 3, …) sit to the right; negative numbers (−1, −2, −3, …) sit to the left. Negative numbers represent quantities below a reference point — temperatures below freezing, debt, or floors below ground level. The further left a number is, the smaller it is, so −10 < −3 < 0 < 5. When you add a negative number, you move left on the number line; when you subtract a negative, you move right (two negatives cancel: 5 − (−3) = 5 + 3 = 8).',
          },
          {
            title: 'Absolute Value',
            content: 'The absolute value of a number is its distance from zero on the number line — it is always non-negative. We write it with vertical bars: |7| = 7 and |−7| = 7, because both 7 and −7 are exactly 7 steps from zero. Absolute value is useful when you care about the size of a difference but not its direction — for example, if the temperature changes from 3°C to −4°C, the change is −7°C but the magnitude (how much it changed) is |−7| = 7 degrees. A key property: |a − b| gives the distance between a and b on the number line.',
          },
        ],
      },
      {
        name: 'The Four Operations',
        lessons: [
          {
            title: 'Addition & Subtraction with Regrouping',
            content: 'To add multi-digit numbers, line them up by place value and start at the ones column. When the sum in any column reaches 10 or more, write the ones digit and "carry" the tens digit to the next column. Example: 478 + 356 — ones: 8+6=14, write 4 carry 1; tens: 7+5+1=13, write 3 carry 1; hundreds: 4+3+1=8. Answer: 834. Subtraction works in reverse: if the top digit is smaller than the bottom, "borrow" 10 from the column to the left (which reduces that column by 1). These carry and borrow steps simply reflect the base-10 nature of our number system.',
          },
          {
            title: 'Multiplication — Why It Works',
            content: 'Multiplication is a shortcut for repeated addition: 6 × 4 means six groups of four, which equals 4+4+4+4+4+4 = 24. The numbers being multiplied are called factors and the result is the product. Knowing multiplication tables up to 12×12 by heart is essential because it speeds up every more advanced calculation. For multi-digit multiplication, use the standard algorithm: multiply each digit of the bottom number by every digit of the top, shift left one place for each new row, then add all rows. Example: 47 × 23 = 47×3 + 47×20 = 141 + 940 = 1,081.',
          },
          {
            title: 'Long Division Step by Step',
            content: 'Long division breaks a large division into a sequence of four repeating steps: Divide, Multiply, Subtract, Bring down. To divide 975 by 4: (1) How many times does 4 go into 9? → 2 times. (2) Write 2, then 2×4=8 below the 9. (3) Subtract: 9−8=1. (4) Bring down the next digit (7) to get 17. Repeat: 4 goes into 17 four times (4×4=16), subtract to get 1, bring down 5 to get 15. Then 4 goes into 15 three times (4×3=12), subtract to get remainder 3. Answer: 243 R3, or 243.75 as a decimal.',
          },
          {
            title: 'Order of Operations (PEMDAS)',
            content: 'When an expression contains multiple operations, a set of rules determines the order: Parentheses first, then Exponents, then Multiplication and Division (left to right), then Addition and Subtraction (left to right). The acronym PEMDAS (or BODMAS) helps remember this. Example: 3 + 6 × (2 + 4)² ÷ 3 — first the parentheses: (2+4)=6; then exponent: 6²=36; then multiply: 6×36=216; then divide: 216÷3=72; finally add: 3+72=75. Without these rules, the same expression could produce dozens of different answers.',
          },
          {
            title: 'Mental Math Strategies',
            content: 'Mental math relies on breaking numbers apart to simplify calculations. The compensation strategy: to add 38+47, round 38 up to 40 (add 2), compute 40+47=87, then subtract the 2 you added → 85. The split strategy: for 23×4, split into (20×4)+(3×4)=80+12=92. For subtraction, counting up often works well: for 503−287, count from 287 → 290 (+3) → 300 (+10) → 503 (+203), total added = 216. These tricks build number sense and reduce reliance on written calculation for everyday problems.',
          },
        ],
      },
      {
        name: 'Fractions & Decimals',
        lessons: [
          {
            title: 'What a Fraction Means',
            content: 'A fraction a/b means: divide one whole into b equal parts and take a of them. The bottom number is the denominator (how many equal parts the whole is cut into) and the top is the numerator (how many parts you have). So 3/4 means "3 out of 4 equal pieces." A proper fraction has numerator < denominator (less than 1 whole). An improper fraction has numerator ≥ denominator (equal to or more than 1 whole), like 7/4. A mixed number like 1¾ combines a whole number and a proper fraction and means the same thing as 7/4.',
          },
          {
            title: 'Adding & Subtracting Fractions',
            content: 'You can only add or subtract fractions when they share the same denominator, because you are counting the same size pieces. If denominators match, simply add or subtract the numerators: 3/8 + 2/8 = 5/8. If they differ, find the Least Common Denominator (LCD) — the smallest number both denominators divide into evenly — and convert each fraction. Example: 1/3 + 1/4 → LCD = 12. Convert: 1/3 = 4/12 and 1/4 = 3/12. Now add: 4/12 + 3/12 = 7/12. Never add the denominators together — that is a very common error.',
          },
          {
            title: 'Multiplying & Dividing Fractions',
            content: 'To multiply fractions, multiply numerators together and denominators together: (2/3) × (4/5) = 8/15. Always simplify the result — here 8/15 is already in lowest terms. You can also cross-cancel before multiplying to keep numbers smaller. To divide by a fraction, multiply by its reciprocal (flip it): (2/3) ÷ (4/5) = (2/3) × (5/4) = 10/12 = 5/6. The reason: dividing by 4/5 asks "how many 4/5-sized pieces fit in 2/3?" — flipping and multiplying gives the exact count.',
          },
          {
            title: 'Decimal Place Value & Operations',
            content: 'Decimals extend the place value system to the right of the decimal point. The first place is tenths (1/10), the second hundredths (1/100), the third thousandths (1/1000). So 0.347 = 3/10 + 4/100 + 7/1000. To add or subtract decimals, line up the decimal points — this ensures you are adding the same-sized pieces. To multiply decimals, ignore the decimal points, multiply as whole numbers, then count the total decimal places in both factors and place the decimal point that many places from the right of the product. To divide, move the decimal in the divisor to make it a whole number, and shift the decimal in the dividend the same number of places.',
          },
          {
            title: 'Converting Between Fractions, Decimals & Percents',
            content: 'These three forms represent the same value — knowing how to convert is essential. Fraction → decimal: divide numerator ÷ denominator (3/4 = 3÷4 = 0.75). Decimal → percent: multiply by 100 (0.75 × 100 = 75%). Percent → fraction: put the percent over 100 and simplify (75/100 = 3/4). Some fractions produce repeating decimals: 1/3 = 0.333… (written 0.3̄). Memorising common conversions (1/2=50%, 1/4=25%, 1/5=20%, 1/8=12.5%) makes mental percentage calculations much faster.',
          },
        ],
      },
      {
        name: 'Percentages & Ratios',
        lessons: [
          {
            title: 'Understanding Percentages',
            content: '"Percent" literally means "per hundred" (from Latin per centum). Writing 35% is the same as writing the fraction 35/100 or the decimal 0.35. To find a percentage of a number, convert the percent to a decimal and multiply: 35% of 80 = 0.35 × 80 = 28. A useful mental shortcut: to find 10%, simply move the decimal one place left (10% of 80 = 8), then scale up or down from there. For 30%: 3 × 8 = 24. For 5%: half of 10% = 4. These tricks handle most everyday percentage questions without a calculator.',
          },
          {
            title: 'Percent Increase & Decrease',
            content: 'Percent change measures how much a quantity has grown or shrunk relative to its original size. Formula: Percent change = ((New − Original) / Original) × 100. If a jacket costs $60 and goes on sale for $45, the percent decrease = ((45−60)/60) × 100 = (−15/60) × 100 = −25%, a 25% discount. If a salary rises from $40,000 to $46,000: (6,000/40,000) × 100 = 15% increase. Note that a 50% decrease followed by a 50% increase does not return to the original — it returns to only 75% of the start (e.g., 100 → 50 → 75).',
          },
          {
            title: 'Ratios & Rates',
            content: 'A ratio compares two quantities by division. The ratio 3:5 can be read as "3 to 5" and written as the fraction 3/5. Ratios stay equivalent when both parts are multiplied or divided by the same number (just like equivalent fractions): 3:5 = 6:10 = 12:20. A rate is a special ratio that compares two different kinds of quantities, like 60 miles per hour or $2.50 per kilogram. A unit rate has a denominator of 1, which makes comparisons easy: $2.50/kg is a unit rate that lets you directly compare prices across different package sizes.',
          },
          {
            title: 'Proportions',
            content: 'A proportion is an equation stating that two ratios are equal: a/b = c/d. This is read "a is to b as c is to d." To solve for an unknown, use cross-multiplication: multiply diagonally across the equals sign. For 3/4 = x/20 → 3 × 20 = 4 × x → 60 = 4x → x = 15. Proportions model countless real-world situations: scaling recipes (if 3 eggs make 12 cookies, how many eggs for 20 cookies?), map distances, currency conversion, and similar triangles in geometry all rely on the proportion equation.',
          },
          {
            title: 'Simple & Compound Interest',
            content: 'Simple interest is calculated only on the original principal: I = P × r × t, where P is principal, r is annual rate (as a decimal), and t is time in years. $1,000 at 5% for 3 years earns I = 1000 × 0.05 × 3 = $150. Compound interest earns interest on interest already earned, using A = P(1 + r/n)^(nt), where n is compounding frequency per year. The same $1,000 at 5% compounded annually for 3 years grows to 1000 × (1.05)³ ≈ $1,157.63 — $7.63 more than simple interest because each year\'s interest is added to the balance before the next year\'s interest is calculated.',
          },
        ],
      },
    ],
  },

  // ── ALGEBRA ───────────────────────────────────────────────────────────────
  {
    id: 'algebra1',
    name: 'Algebra',
    icon: '🔡',
    level: 'high',
    color: '#6C63FF',
    bg: '#EFEDFF',
    description: 'The language of unknowns — variables, equations, functions, and how to solve them.',
    topics: [
      {
        name: 'Variables & Expressions',
        lessons: [
          {
            title: 'Variables and Algebraic Expressions',
            content: 'A variable is a letter (commonly x, y, or n) that stands for an unknown or changing number. An algebraic expression is a combination of numbers, variables, and operations — such as 3x + 7 or 2a² − 5b. To evaluate an expression means to substitute a specific value for each variable and compute the result. If x = 4, then 3x + 7 = 3(4) + 7 = 12 + 7 = 19. Expressions do not have an equals sign; they represent a quantity. An equation, by contrast, states that two expressions are equal: 3x + 7 = 19.',
          },
          {
            title: 'Combining Like Terms',
            content: 'Like terms have exactly the same variable part (same letters raised to the same powers). 5x and −2x are like terms; 3x² and 7x are not (different exponents). To simplify, add or subtract the coefficients of like terms: 5x − 2x = 3x. With multiple types: 4x² + 3x − x² + 7 − 2x = (4−1)x² + (3−2)x + 7 = 3x² + x + 7. Combining like terms is the fundamental simplification step used in virtually every algebra problem, so recognising like terms quickly is a core skill.',
          },
          {
            title: 'The Distributive Property',
            content: 'The distributive property states that a(b + c) = ab + ac — you multiply the factor outside the parentheses by every term inside. For example, 3(x + 5) = 3x + 15, and −2(4x − 3) = −8x + 6. This property is the engine behind expanding brackets. It also runs in reverse as factoring: 6x + 10 = 2(3x + 5). A common mistake is forgetting to distribute across all terms, especially with a negative sign: −(x − 4) = −x + 4, not −x − 4.',
          },
          {
            title: 'Exponent Rules',
            content: 'Exponents count how many times a base is multiplied by itself: x³ = x · x · x. The key rules are: Product rule: xᵃ · xᵇ = xᵃ⁺ᵇ (add exponents when multiplying same base). Quotient rule: xᵃ ÷ xᵇ = xᵃ⁻ᵇ (subtract when dividing). Power rule: (xᵃ)ᵇ = xᵃᵇ (multiply exponents when raising a power to a power). Zero exponent: x⁰ = 1 for any x ≠ 0. Negative exponent: x⁻ⁿ = 1/xⁿ. These rules allow you to simplify complex expressions without expanding them out term by term.',
          },
          {
            title: 'Scientific Notation',
            content: 'Scientific notation writes very large or very small numbers in the form a × 10ⁿ, where 1 ≤ a < 10 and n is an integer. To convert 93,000,000: move the decimal 7 places left → 9.3 × 10⁷. To convert 0.000045: move the decimal 5 places right → 4.5 × 10⁻⁵. To multiply two numbers in scientific notation, multiply the coefficients and add the exponents: (3 × 10⁴) × (2 × 10³) = 6 × 10⁷. This notation is essential in science and engineering because it avoids writing chains of zeros and immediately shows the order of magnitude of a quantity.',
          },
        ],
      },
      {
        name: 'Linear Equations & Inequalities',
        lessons: [
          {
            title: 'Solving Linear Equations',
            content: 'An equation is like a balance scale — whatever you do to one side you must do to the other to keep it balanced. The goal is to isolate the variable by undoing each operation in reverse order of operations. For 3x − 5 = 13: add 5 to both sides (3x = 18), then divide both sides by 3 (x = 6). For 2(x + 4) = 14: distribute first (2x + 8 = 14), subtract 8 (2x = 6), divide by 2 (x = 3). Always verify by substituting back: 2(3 + 4) = 2(7) = 14 ✓. This check step catches arithmetic errors and builds confidence.',
          },
          {
            title: 'Slope & the Equation of a Line',
            content: 'The slope m of a line measures its steepness: m = rise/run = (y₂ − y₁)/(x₂ − x₁). A positive slope rises left to right; negative falls; zero is horizontal; undefined is vertical. The slope-intercept form y = mx + b describes any non-vertical line, where m is the slope and b is the y-intercept (where the line crosses the y-axis). To write the equation of a line through (2, 5) with slope 3: y = 3x + b. Substitute the point: 5 = 3(2) + b → b = −1. Equation: y = 3x − 1.',
          },
          {
            title: 'Systems of Two Linear Equations',
            content: 'A system of two linear equations asks for the (x, y) point where both lines intersect. Substitution: solve one equation for a variable, then substitute into the other. For x + y = 7 and x − y = 3: from the first, x = 7 − y. Substitute: (7 − y) − y = 3 → 7 − 2y = 3 → y = 2, then x = 5. Elimination: add or subtract the equations to cancel one variable. If lines are parallel (same slope, different intercepts), the system has no solution. If the lines are identical, the system has infinitely many solutions.',
          },
          {
            title: 'Linear Inequalities',
            content: 'Solving an inequality follows the same steps as solving an equation, with one critical exception: when you multiply or divide both sides by a negative number, you must reverse the direction of the inequality symbol. Example: −3x < 12 → divide by −3 and flip → x > −4. On a number line, this is shown with an open circle at −4 (since −4 itself is not included) and an arrow pointing right. For ≤ or ≥, use a filled (closed) circle. Always solve inequalities for the variable and state the solution set clearly, either in inequality notation or interval notation.',
          },
          {
            title: 'Absolute Value Equations',
            content: 'The equation |x| = 5 has two solutions because both 5 and −5 are 5 units from zero: x = 5 or x = −5. For |2x − 3| = 7, split into two cases: (1) 2x − 3 = 7 → x = 5, and (2) 2x − 3 = −7 → x = −2. Always check both solutions in the original equation — sometimes one is extraneous (invalid). For |x| < 5, the solution is −5 < x < 5 (a bounded interval). For |x| > 5, the solution is x < −5 or x > 5 (two separate rays). Remember: if the right side is negative, the equation |expression| = negative number has no solution.',
          },
        ],
      },
      {
        name: 'Quadratic Equations',
        lessons: [
          {
            title: 'What is a Quadratic?',
            content: 'A quadratic equation has the standard form ax² + bx + c = 0, where a ≠ 0. The defining feature is the x² term — this creates a parabola when graphed. The coefficient a controls whether the parabola opens upward (a > 0) or downward (a < 0), and how wide or narrow it is. The solutions to ax² + bx + c = 0 are called roots, zeroes, or x-intercepts — they are the x-values where the parabola crosses the x-axis. A quadratic can have 2, 1, or 0 real solutions depending on whether its graph crosses, touches, or misses the x-axis.',
          },
          {
            title: 'Factoring to Solve Quadratics',
            content: 'Factoring rewrites the quadratic as a product of two binomials, then uses the Zero Product Property: if A × B = 0, then A = 0 or B = 0. To factor x² + 7x + 12, find two numbers that multiply to 12 and add to 7: those are 3 and 4. So x² + 7x + 12 = (x + 3)(x + 4). Set each factor to zero: x + 3 = 0 → x = −3, and x + 4 = 0 → x = −4. Special patterns worth memorising: difference of squares a² − b² = (a+b)(a−b), and perfect square trinomials a² + 2ab + b² = (a+b)².',
          },
          {
            title: 'The Quadratic Formula',
            content: 'When factoring is difficult or impossible, the quadratic formula always works: x = (−b ± √(b²−4ac)) / (2a). For 2x² − 5x − 3 = 0 (where a=2, b=−5, c=−3): x = (5 ± √(25 + 24)) / 4 = (5 ± √49) / 4 = (5 ± 7) / 4. This gives x = 3 or x = −1/2. The formula is derived by completing the square on the general form and is guaranteed to give all solutions. It works for any quadratic — if you can only remember one method, remember this one.',
          },
          {
            title: 'The Discriminant',
            content: 'The discriminant is the expression under the square root in the quadratic formula: Δ = b² − 4ac. It reveals the nature of the solutions without fully solving the equation. If Δ > 0: the equation has two distinct real solutions (the parabola crosses the x-axis at two points). If Δ = 0: exactly one real solution, called a repeated root (the parabola just touches the x-axis). If Δ < 0: no real solutions (the parabola does not cross the x-axis). For x² − 6x + 9: Δ = 36 − 36 = 0, so x = 3 is the only solution.',
          },
          {
            title: 'Graphing Parabolas',
            content: 'The graph of y = ax² + bx + c is a parabola with its vertex (the peak or valley) at x = −b/(2a). Substitute this x back in to find the y-coordinate of the vertex. The axis of symmetry is the vertical line x = −b/(2a), meaning the parabola is a mirror image on either side of it. Vertex form y = a(x − h)² + k makes the vertex (h, k) immediately visible. The y-intercept is always (0, c). Plot the vertex, y-intercept, and one or two additional symmetric points to sketch an accurate parabola.',
          },
        ],
      },
      {
        name: 'Functions & Graphs',
        lessons: [
          {
            title: 'What is a Function?',
            content: 'A function is a rule that assigns exactly one output to each input. We write f(x) to mean "the output of function f when the input is x." The set of all valid inputs is the domain; the set of all possible outputs is the range. The vertical line test checks whether a graph is a function: if any vertical line crosses the graph more than once, the graph is not a function (because one input would give two outputs). Examples of functions: f(x) = 2x + 1 (linear), g(x) = x² (quadratic). A circle is not a function because a single x-value maps to two y-values.',
          },
          {
            title: 'Domain & Range',
            content: 'Finding the domain means identifying which inputs are allowed. Two common restrictions: (1) You cannot divide by zero, so exclude any x that makes the denominator zero. For f(x) = 1/(x−3), domain is all real numbers except x = 3. (2) You cannot take the square root of a negative number (in real numbers), so require the expression under the root to be ≥ 0. For f(x) = √(x − 2), you need x − 2 ≥ 0, so domain is x ≥ 2. The range is trickier — often found by looking at the graph or working backward from the output.',
          },
          {
            title: 'Transformations of Functions',
            content: 'Starting from a base function f(x), you can shift, stretch, and flip its graph using simple modifications. Vertical shift up k: f(x) + k. Vertical shift down k: f(x) − k. Horizontal shift right h: f(x − h) (note: right is minus). Horizontal shift left h: f(x + h). Vertical stretch by factor a: a·f(x). Reflection over x-axis: −f(x). Reflection over y-axis: f(−x). Example: g(x) = −2(x−3)² + 5 is the base parabola x² reflected, stretched by 2, shifted right 3, and shifted up 5. These transformations apply to all function families.',
          },
          {
            title: 'Inverse Functions',
            content: 'The inverse function f⁻¹ undoes what f does: if f(3) = 10, then f⁻¹(10) = 3. To find an inverse algebraically, replace f(x) with y, swap x and y, then solve for y. For f(x) = 2x + 6: swap to x = 2y + 6, solve → y = (x − 6)/2, so f⁻¹(x) = (x − 6)/2. Graphically, f and f⁻¹ are reflections of each other across the line y = x. Not every function has an inverse — for an inverse to exist, the original function must be one-to-one (each output comes from exactly one input), which you can check with the horizontal line test.',
          },
          {
            title: 'Exponential & Logarithmic Functions',
            content: 'An exponential function f(x) = bˣ (where b > 0, b ≠ 1) models rapid growth or decay. The base b determines behaviour: if b > 1, the function grows (doubling, tripling, etc.); if 0 < b < 1, it decays. The natural exponential eˣ (where e ≈ 2.718) is the most important, appearing throughout science. The logarithm logb(x) is the inverse of bˣ — it answers "to what power must I raise b to get x?" So log₂(8) = 3 because 2³ = 8. Key property: log(ab) = log a + log b, which converts multiplication into addition — this was the core of pre-calculator computation.',
          },
        ],
      },
    ],
  },

  // ── GEOMETRY ──────────────────────────────────────────────────────────────
  {
    id: 'geometry',
    name: 'Geometry',
    icon: '📐',
    level: 'high',
    color: '#4FACFE',
    bg: '#EBF5FF',
    description: 'Shapes, angles, proofs, and the mathematics of space — both flat and three-dimensional.',
    topics: [
      {
        name: 'Lines, Angles & Triangles',
        lessons: [
          {
            title: 'Angles and Their Relationships',
            content: 'An angle is formed by two rays sharing a common endpoint called the vertex, and is measured in degrees. Angles are classified by size: acute (0° < θ < 90°), right (exactly 90°), obtuse (90° < θ < 180°), and straight (180°). Two angles are complementary if they sum to 90°, supplementary if they sum to 180°. When two lines intersect, the four angles formed come in two pairs of vertical angles (opposite each other) which are always equal. These relationships form the foundation of geometric proofs and are used constantly in more advanced topics.',
          },
          {
            title: 'Parallel Lines & Transversals',
            content: 'When a transversal (a line that crosses two other lines) intersects a pair of parallel lines, it creates eight angles. These angles have predictable relationships: alternate interior angles are equal (they are on opposite sides of the transversal, between the parallel lines); corresponding angles are equal (in the same position at each intersection); co-interior (same-side interior) angles are supplementary (they add to 180°). If you can show any one of these relationships holds, the lines must be parallel — these facts are used both to prove lines are parallel and to find missing angles.',
          },
          {
            title: 'Triangle Angle Sum & Exterior Angles',
            content: 'The three interior angles of any triangle always add up to exactly 180°. This means once you know two angles, you can always find the third: if a triangle has angles 50° and 75°, the third must be 180° − 50° − 75° = 55°. An exterior angle of a triangle is formed by extending one side; it equals the sum of the two non-adjacent interior angles. For example, if the two interior angles not at a vertex are 50° and 75°, the exterior angle at the third vertex is 125°. This exterior angle theorem is a direct consequence of the 180° sum and is very useful for quickly finding angles in complex figures.',
          },
          {
            title: 'Triangle Congruence (SSS, SAS, ASA)',
            content: 'Two triangles are congruent when they have the same size and shape — all corresponding sides and angles are equal. Rather than checking all six measurements, three specific combinations are sufficient: SSS (three sides), SAS (two sides and the included angle), ASA (two angles and the included side), and AAS (two angles and a non-included side). RHS (right angle, hypotenuse, side) works specifically for right triangles. Note that SSA (two sides and a non-included angle) is not a valid congruence condition — it can produce two different triangles. Congruence is the basis for geometric proofs and construction.',
          },
          {
            title: 'Similar Triangles & The AA Postulate',
            content: 'Two triangles are similar if they have the same shape but not necessarily the same size — all corresponding angles are equal, and corresponding sides are proportional. The Angle-Angle (AA) postulate says you only need two pairs of equal angles to guarantee similarity (the third pair automatically matches since all three sum to 180°). If △ABC ~ △DEF with scale factor k = 2, then every side of △DEF is twice the corresponding side of △ABC, and the area of △DEF is k² = 4 times the area of △ABC. Similar triangles are the foundation of trigonometry and are used to measure heights of buildings, distances across rivers, and scales on maps.',
          },
        ],
      },
      {
        name: 'Circles & Polygons',
        lessons: [
          {
            title: 'Circle Terminology & Properties',
            content: 'A circle is the set of all points exactly r units (the radius) from a central point. Key parts: the diameter d = 2r passes through the center. A chord connects any two points on the circle; the diameter is the longest chord. An arc is a portion of the circle\'s circumference. A tangent line touches the circle at exactly one point and is always perpendicular to the radius at that point. A secant line cuts through the circle at two points. Understanding these terms is essential because circle theorems state precise relationships between these elements.',
          },
          {
            title: 'Circle Theorems',
            content: 'The central angle theorem: an angle formed at the center of a circle equals the arc it subtends. The inscribed angle theorem: an angle formed by two chords meeting on the circle equals half the central angle for the same arc. Consequence: all inscribed angles subtending the same arc are equal. Thales\' theorem: any inscribed angle in a semicircle is exactly 90°. The tangent-chord angle equals half the intercepted arc. These theorems allow you to find missing angles in complex circle diagrams using only the arcs and a few given angles.',
          },
          {
            title: 'Polygon Interior & Exterior Angles',
            content: 'Any polygon with n sides can be cut into (n − 2) triangles by drawing diagonals from one vertex. Since each triangle has 180°, the sum of interior angles of an n-gon is (n − 2) × 180°. Triangle: 180°. Quadrilateral: 360°. Pentagon: 540°. Hexagon: 720°. For a regular polygon (all sides and angles equal), each interior angle = (n − 2) × 180° / n. The exterior angles of any convex polygon always sum to 360°, regardless of the number of sides. This is because walking around the polygon, you complete exactly one full turn.',
          },
          {
            title: 'The Pythagorean Theorem',
            content: 'In any right triangle with legs a and b and hypotenuse c (opposite the right angle), a² + b² = c². To find the hypotenuse when legs are 5 and 12: c² = 25 + 144 = 169, so c = 13. To find a missing leg when c = 10 and a = 6: b² = 100 − 36 = 64, so b = 8. Common Pythagorean triples (whole-number solutions) to memorise: (3,4,5), (5,12,13), (8,15,17), (7,24,25). Any multiple of a triple is also a triple: (6,8,10), (9,12,15), etc. The theorem extends to 3D: the space diagonal of a box with dimensions a, b, c is √(a² + b² + c²).',
          },
          {
            title: 'Coordinate Geometry',
            content: 'Placing shapes on a coordinate plane connects geometry and algebra. The distance between two points (x₁,y₁) and (x₂,y₂) is d = √((x₂−x₁)² + (y₂−y₁)²) — this is just the Pythagorean theorem on the coordinate plane. The midpoint is M = ((x₁+x₂)/2, (y₁+y₂)/2). Two lines are parallel if they have equal slopes (m₁ = m₂). Two lines are perpendicular if their slopes are negative reciprocals (m₁ × m₂ = −1). A circle with center (h,k) and radius r has equation (x−h)² + (y−k)² = r².',
          },
        ],
      },
      {
        name: 'Area & Perimeter',
        lessons: [
          {
            title: 'Perimeter of Polygons',
            content: 'Perimeter is the total distance around the outside boundary of a shape — it is a one-dimensional measure in linear units (cm, m, ft, etc.). For any polygon, add all side lengths: P = a + b + c + … For a rectangle with length l and width w: P = 2(l + w). For a square with side s: P = 4s. For a regular n-gon with side s: P = ns. When only some sides are labelled, use parallel/equal markings and the shape\'s properties to find the missing lengths before adding. Perimeter determines how much fencing, trim, or border material is needed to go around a region.',
          },
          {
            title: 'Area of Triangles & Quadrilaterals',
            content: 'Area measures the amount of space inside a 2D shape — a two-dimensional measure in square units (cm², m², ft², etc.). Rectangle: A = l × w. Parallelogram: A = b × h, where h is the perpendicular height (not the slanted side). Triangle: A = ½ × b × h (half a parallelogram). Trapezoid: A = ½(b₁ + b₂) × h, where b₁ and b₂ are the two parallel sides. Rhombus with diagonals d₁ and d₂: A = ½d₁d₂. The height in every formula must be perpendicular to the base — using a slanted side length instead of the true height is a very common error.',
          },
          {
            title: 'Circumference & Area of a Circle',
            content: 'For a circle with radius r: the circumference (perimeter) is C = 2πr = πd, and the area is A = πr². The constant π (pi) ≈ 3.14159 is the ratio of any circle\'s circumference to its diameter — it is the same for every circle in existence. Using π ≈ 3.14: a circle of radius 7 cm has C ≈ 2 × 3.14 × 7 = 43.96 cm and A ≈ 3.14 × 49 = 153.86 cm². A sector (pie-slice piece) of angle θ (in degrees) has arc length (θ/360) × 2πr and area (θ/360) × πr². These formulas scale the full-circle formulas by the fraction of the circle that the sector represents.',
          },
          {
            title: 'Area of Composite Shapes',
            content: 'Composite shapes are made by combining or cutting standard shapes. To find the area: identify the simple shapes that make up the composite, find each area separately, then add areas together (for combined shapes) or subtract (for shapes with cut-outs). Example: a rectangle 10×8 with a semicircle of diameter 6 cut out of one end — first find the full rectangle area (80), then the semicircle area (½ × π × 3² ≈ 14.14), and subtract: 80 − 14.14 = 65.86 square units. Always label each component clearly and double-check that you are not double-counting or missing any region.',
          },
          {
            title: 'Scale Drawings & Measurement',
            content: 'A scale drawing represents a real object with every length reduced (or enlarged) by the same scale factor k. If k = 1:50, then 1 cm on the drawing = 50 cm in reality. To find a real length, multiply the drawing length by 50. To find a drawing length, divide the real length by 50. Critically, area scales by k², not k: if all lengths are doubled (k=2), area becomes 4 times larger. Similarly, volume scales by k³. This distinction is important — doubling the dimensions of a room does not double its area; it quadruples it, meaning four times the flooring material is required.',
          },
        ],
      },
      {
        name: 'Volume & Surface Area',
        lessons: [
          {
            title: 'Volume of Prisms & Cylinders',
            content: 'Volume measures the amount of three-dimensional space a solid occupies, in cubic units (cm³, m³, in³). Any prism or cylinder has volume V = Base Area × Height. Rectangular prism (box): V = l × w × h. Triangular prism: V = (½ × base × triangle height) × prism length. Cylinder: V = πr²h. The key is that the cross-section (the shape of the base) is constant throughout the solid\'s height — you are stacking identical layers. If you double the height, you double the volume; if you double the radius of a cylinder, you quadruple the volume (because the base area is πr²).',
          },
          {
            title: 'Volume of Pyramids, Cones & Spheres',
            content: 'Pyramids and cones have V = ⅓ × Base Area × Height — exactly one-third the volume of the corresponding prism or cylinder with the same base and height. This factor of 1/3 can be demonstrated by filling a cone with water and pouring it into the matching cylinder — exactly three cones fill the cylinder. Sphere: V = (4/3)πr³. Example: a cone of radius 3 and height 8 has V = ⅓ × π(9) × 8 = 24π ≈ 75.4 cubic units. A sphere of radius 5 has V = (4/3)π(125) ≈ 523.6 cubic units.',
          },
          {
            title: 'Surface Area of Prisms',
            content: 'Surface area is the total area of all outer faces of a 3D solid — it tells you how much material is needed to wrap or paint the solid. For a rectangular prism (box) with dimensions l, w, h: SA = 2(lw + lh + wh) — there are three pairs of identical rectangular faces. For a triangular prism: add the two triangular ends plus the three rectangular sides. Strategy: always unfold (or mentally unfold) the solid into a net (a flat layout of all faces), find each face\'s area, and sum them. Getting organised and tracking every face prevents missing or double-counting a surface.',
          },
          {
            title: 'Surface Area of Cylinders, Cones & Spheres',
            content: 'Cylinder: SA = 2πr² + 2πrh — two circular bases plus the lateral surface (which unrolls into a rectangle of width 2πr and height h). Cone: SA = πr² + πrl — one circular base plus the lateral surface, where l = √(r² + h²) is the slant height (not the vertical height). Sphere: SA = 4πr². A useful fact: the surface area of a sphere equals exactly four times the area of a great circle (the largest cross-sectional circle), 4 × πr² — this relationship is used in derivations across physics and calculus.',
          },
          {
            title: 'Cross Sections & 3D Reasoning',
            content: 'A cross section is the 2D shape you see when you slice through a 3D solid with a flat plane. A horizontal slice of a cylinder gives a circle. A vertical slice through the axis also gives a rectangle. Slicing a sphere through its center gives a circle; any parallel slice gives a smaller circle. Slicing a cone parallel to the base gives a circle; at an angle gives an ellipse; through the apex parallel to the side gives a triangle. Visualising cross sections builds spatial reasoning essential in engineering, architecture, and medicine (e.g., MRI scans are cross sections of the body).',
          },
        ],
      },
    ],
  },

  // ── TRIGONOMETRY ──────────────────────────────────────────────────────────
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    icon: '📊',
    level: 'high',
    color: '#6C63FF',
    bg: '#EFEDFF',
    description: 'The mathematics of angles and triangles — essential for physics, engineering, and calculus.',
    topics: [
      {
        name: 'Right Triangle Trigonometry',
        lessons: [
          {
            title: 'SOH-CAH-TOA',
            content: 'For a right triangle, label the sides relative to a chosen acute angle θ: the side directly opposite θ is "opposite," the side next to θ (not the hypotenuse) is "adjacent," and the longest side (across from the right angle) is the "hypotenuse." The three primary trig ratios are: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. The acronym SOH-CAH-TOA encodes these. Example: in a right triangle where the opposite side is 5 and the hypotenuse is 13, sin θ = 5/13, cos θ = 12/13, tan θ = 5/12 (the adjacent leg is found via Pythagoras: √(13²−5²) = 12).',
          },
          {
            title: 'Special Angle Values',
            content: 'Memorising exact trig values for 30°, 45°, and 60° eliminates the need for a calculator in many problems. For a 30-60-90 triangle with hypotenuse 2: the short leg (opposite 30°) = 1, long leg (opposite 60°) = √3. So: sin 30°=½, cos 30°=√3/2, tan 30°=1/√3=√3/3. sin 60°=√3/2, cos 60°=½, tan 60°=√3. For a 45-45-90 triangle with hypotenuse √2: both legs = 1. So: sin 45°=cos 45°=1/√2=√2/2, tan 45°=1. At 0° and 90°: sin 0°=0, cos 0°=1, sin 90°=1, cos 90°=0.',
          },
          {
            title: 'Solving Right Triangles',
            content: 'Solving a triangle means finding all unknown sides and angles. With one acute angle θ and one side, you can find everything else. Strategy: identify the two sides involved, choose the trig ratio that connects them, set up an equation, and solve. To find a side: if sin θ = opp/hyp and hyp = 10, θ = 40°, then opp = 10 sin 40° ≈ 6.43. To find an angle: if opp = 8 and adj = 6, then tan θ = 8/6, so θ = arctan(8/6) ≈ 53.1°. Always use Pythagoras to find the third side once you have two. Label your diagram before writing any equations.',
          },
          {
            title: 'Law of Sines',
            content: 'The Law of Sines extends trigonometry to any triangle (not just right triangles): a/sin A = b/sin B = c/sin C, where side a is opposite angle A, side b opposite B, and side c opposite C. Use it when you know: (1) two angles and any side (AAS or ASA), or (2) two sides and the angle opposite one of them (SSA — the "ambiguous case"). Example: in a triangle with A=40°, B=75°, a=8 — first find C=65°, then b = 8 sin 75°/sin 40° ≈ 11.94. The SSA case can sometimes produce two valid triangles, which is why it\'s called ambiguous.',
          },
          {
            title: 'Law of Cosines',
            content: 'The Law of Cosines generalises the Pythagorean theorem to any triangle: c² = a² + b² − 2ab cos C (where C is the angle between sides a and b). When C = 90°, cos 90° = 0 and it reduces to the Pythagorean theorem. Use it when you know: (1) all three sides (SSS) to find angles, or (2) two sides and the included angle (SAS) to find the third side. Example: a=5, b=7, C=60°: c² = 25 + 49 − 2(5)(7)(0.5) = 74 − 35 = 39, so c = √39 ≈ 6.24. Rearranging gives cos C = (a² + b² − c²)/(2ab) for finding angles from three sides.',
          },
        ],
      },
      {
        name: 'The Unit Circle & Radians',
        lessons: [
          {
            title: 'Radian Measure',
            content: 'A radian is defined as the angle subtended at the center of a circle by an arc whose length equals the radius. A full rotation (360°) corresponds to a circumference of 2πr, which is 2π radii, so 360° = 2π radians. Key conversions: to go from degrees to radians, multiply by π/180; from radians to degrees, multiply by 180/π. Important pairs: 30°=π/6, 45°=π/4, 60°=π/3, 90°=π/2, 180°=π, 270°=3π/2, 360°=2π. Radians are the natural unit for calculus because the derivative of sin x (in radians) is simply cos x — this clean relationship breaks down if degrees are used.',
          },
          {
            title: 'The Unit Circle',
            content: 'The unit circle is a circle of radius 1 centered at the origin. For any angle θ (measured counter-clockwise from the positive x-axis), the point on the unit circle is (cos θ, sin θ). This gives a clean, general definition of sine and cosine for any angle — not just acute angles in right triangles. Because the radius is 1, sin θ is simply the y-coordinate and cos θ the x-coordinate. This is why sin and cos always stay between −1 and 1. The unit circle is the single most important diagram in trigonometry; you should be able to recall coordinates at all 16 standard angles without hesitation.',
          },
          {
            title: 'Signs of Trig Functions by Quadrant',
            content: 'The sign of each trig function depends on which quadrant the angle terminates in. In Quadrant I (0 to 90°): all three (sin, cos, tan) are positive. In Q II (90° to 180°): sin is positive, cos and tan are negative. In Q III (180° to 270°): tan is positive, sin and cos are negative. In Q IV (270° to 360°): cos is positive, sin and tan are negative. The mnemonic "All Students Take Calculus" (ASTC) matches the initials of what is positive in Q I, Q II, Q III, Q IV respectively. Reference angles (the acute angle to the nearest x-axis) let you find exact values in any quadrant.',
          },
          {
            title: 'Reference Angles',
            content: 'A reference angle is the positive acute angle between the terminal side of θ and the x-axis. It allows you to evaluate trig functions for any angle using known acute-angle values, just adjusting the sign based on quadrant. For θ = 150°: it is in Q II, reference angle = 180° − 150° = 30°. So sin 150° = +sin 30° = 1/2 (positive because Q II). cos 150° = −cos 30° = −√3/2 (negative because Q II). For θ = 225°: Q III, reference angle = 225° − 180° = 45°. sin 225° = −sin 45° = −√2/2, cos 225° = −cos 45° = −√2/2.',
          },
          {
            title: 'Reciprocal & Co-Functions',
            content: 'The three primary ratios have reciprocals: cosecant csc θ = 1/sin θ, secant sec θ = 1/cos θ, cotangent cot θ = 1/tan θ. These are defined as long as the denominator is not zero. Co-function identities relate pairs of trig functions for complementary angles (angles summing to 90°): sin θ = cos(90°−θ), tan θ = cot(90°−θ), sec θ = csc(90°−θ). The prefix "co-" in cosine, cotangent, and cosecant comes from "complementary" — cos of an angle equals the sine of its complement. These identities are useful for rewriting expressions and simplifying integrals.',
          },
        ],
      },
      {
        name: 'Graphs of Trig Functions',
        lessons: [
          {
            title: 'The Sine & Cosine Waves',
            content: 'The graph of y = sin x is a smooth wave: starting at 0, rising to a maximum of 1 at x = π/2, back to 0 at x = π, down to a minimum of −1 at x = 3π/2, and returning to 0 at x = 2π, then repeating. The period is 2π (the length of one complete cycle). The graph of y = cos x has the same shape but starts at 1 when x = 0 — it is exactly the sine graph shifted left by π/2. Both waves oscillate forever, with every value between −1 and 1 occurring infinitely often. These waves model any periodic phenomenon: sound waves, tides, seasons, and alternating current.',
          },
          {
            title: 'Amplitude, Period & Phase Shift',
            content: 'The general sine function y = A sin(Bx + C) + D has four parameters: A is the amplitude (half the height from minimum to maximum — the wave reaches ±A from the midline). The period is 2π/|B| (the length of one complete cycle). The phase shift is −C/B (how far the graph shifts horizontally; positive C shifts left). D is the vertical shift (midline). Example: y = 3 sin(2x − π/2) + 1 has amplitude 3 (reaches from −2 to 4), period 2π/2 = π, phase shift π/4 to the right, and midline y = 1.',
          },
          {
            title: 'The Tangent Function',
            content: 'The graph of y = tan x differs dramatically from sine and cosine. Since tan x = sin x / cos x, tan x is undefined wherever cos x = 0, creating vertical asymptotes at x = ±π/2, ±3π/2, etc. The period of tangent is π (half that of sine/cosine). The graph rises from −∞ to +∞ within each period, crossing zero at every multiple of π. Unlike sine and cosine, tangent is unbounded — it has no amplitude. The standard form y = A tan(Bx + C) + D has period π/|B|, and A controls the vertical stretch (steepness) rather than a bounded amplitude.',
          },
          {
            title: 'Inverse Trig Functions & Their Ranges',
            content: 'Sine, cosine, and tangent are periodic, so they are not one-to-one over all reals. To define inverses, we restrict their domains: arcsin (sin⁻¹) is defined for inputs in [−1,1] with output in [−π/2, π/2]. arccos is defined for inputs in [−1,1] with output in [0, π]. arctan is defined for all real inputs with output in (−π/2, π/2). The output is the principal value. Example: sin⁻¹(√3/2) = π/3, not 2π/3, because π/3 is in the restricted range [−π/2, π/2]. These functions are essential for solving trig equations and appear throughout calculus.',
          },
          {
            title: 'Modeling with Trig Functions',
            content: 'Many real phenomena are periodic and can be modelled by y = A sin(Bx + C) + D. To build a model from data, identify: the maximum and minimum values of the quantity, then A = (max−min)/2 and D = (max+min)/2. Measure the period T and set B = 2π/T. Adjust C for the horizontal shift. Example: a town\'s temperature peaks at 35°C in July and drops to 5°C in January. A = (35−5)/2 = 15, D = (35+5)/2 = 20, period = 12 months so B = 2π/12 = π/6. Model: y = 15 sin(π/6 · x + C) + 20, where C is adjusted so the peak falls in month 7.',
          },
        ],
      },
      {
        name: 'Trigonometric Identities',
        lessons: [
          {
            title: 'Fundamental Pythagorean Identities',
            content: 'The three Pythagorean identities come directly from the unit circle definition. Since any point on the unit circle satisfies x² + y² = 1, and x = cos θ, y = sin θ: sin²θ + cos²θ = 1 (the main one). Dividing every term by cos²θ gives tan²θ + 1 = sec²θ. Dividing every term by sin²θ gives 1 + cot²θ = csc²θ. These identities are used constantly to simplify expressions, rewrite integrals in calculus, and prove other identities. Strategy for proofs: pick the more complex side, rewrite everything in terms of sin and cos, simplify using algebra, and aim to match the other side.',
          },
          {
            title: 'Sum & Difference Formulas',
            content: 'The angle addition formulas expand trig functions of a sum or difference: sin(A ± B) = sin A cos B ± cos A sin B. cos(A ± B) = cos A cos B ∓ sin A sin B. tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B). Example: to find cos 75° exactly: cos(45° + 30°) = cos45°cos30° − sin45°sin30° = (√2/2)(√3/2) − (√2/2)(1/2) = √6/4 − √2/4 = (√6−√2)/4. These formulas allow you to compute exact values for many angles beyond the standard 30°, 45°, 60°.',
          },
          {
            title: 'Double & Half Angle Formulas',
            content: 'Setting B = A in the sum formulas gives the double angle formulas: sin(2A) = 2 sin A cos A. cos(2A) has three equivalent forms: cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1. tan(2A) = 2tanA/(1−tan²A). These appear constantly in calculus integrals. Rearranging cos(2A): sin²A = (1−cos2A)/2 and cos²A = (1+cos2A)/2 — these power-reducing formulas convert squared trig functions to first powers, which is essential for integrating sin²x and cos²x.',
          },
          {
            title: 'Solving Trigonometric Equations',
            content: 'A trig equation involves an unknown angle. Since trig functions are periodic, equations typically have infinitely many solutions. First find all solutions in [0°, 360°) using the unit circle and reference angles, then add multiples of the period. Example: 2sin x − 1 = 0 → sin x = 1/2 → x = 30° or x = 150° in [0°, 360°). General solution: x = 30° + 360°n or x = 150° + 360°n, for any integer n. For harder equations, use identities to rewrite everything in terms of one function, then factor or use the quadratic formula treating the trig function as the variable.',
          },
          {
            title: 'Proving Trig Identities',
            content: 'An identity is an equation true for all values of the variable (where defined). Proving one means showing both sides are algebraically equivalent. Rules for proofs: (1) work on only one side — usually the more complex side. (2) Never "move" terms across the equals sign. (3) Rewrite in terms of sin and cos when stuck. (4) Look for Pythagorean substitutions (e.g., replace 1 − sin²x with cos²x). Example: prove (1 − cos²x)/sin x = sin x. Left side: (1−cos²x)/sin x = sin²x/sin x = sin x = right side ✓. The key is patience and systematic manipulation, not guessing.',
          },
        ],
      },
    ],
  },

  // ── CALCULUS ──────────────────────────────────────────────────────────────
  {
    id: 'calc1',
    name: 'Calculus',
    icon: '∫',
    level: 'college',
    color: '#FF6584',
    bg: '#FFF0F3',
    description: 'The mathematics of change and accumulation — derivatives, integrals, and their applications.',
    topics: [
      {
        name: 'Limits',
        lessons: [
          {
            title: 'What is a Limit?',
            content: 'The limit lim_{x→a} f(x) = L asks: what value does f(x) approach as x gets arbitrarily close to a — without necessarily equalling a? We don\'t care what happens at x = a, only what happens near it. Example: f(x) = (x²−4)/(x−2) is undefined at x=2 (division by zero), but near x=2 it simplifies to x+2, which approaches 4. So the limit is 4 even though f(2) doesn\'t exist. For a limit to exist, the left-hand limit (x approaching a from below) and the right-hand limit (from above) must both equal L. If they differ, the limit does not exist.',
          },
          {
            title: 'Evaluating Limits Algebraically',
            content: 'If f is continuous at a, the limit is simply f(a) — just substitute. For 0/0 forms (indeterminate forms), you must manipulate algebraically before substituting. Common techniques: (1) Factor and cancel — (x²−9)/(x−3) = (x+3)(x−3)/(x−3) = x+3, limit as x→3 is 6. (2) Rationalise the numerator — for limits with √, multiply by the conjugate. (3) For limits at infinity, divide numerator and denominator by the highest power of x in the denominator. Example: (3x²+2)/(5x²−1) as x→∞: divide by x², get (3+2/x²)/(5−1/x²) → 3/5.',
          },
          {
            title: 'L\'Hôpital\'s Rule',
            content: 'When a limit produces the indeterminate form 0/0 or ∞/∞, L\'Hôpital\'s rule allows you to differentiate numerator and denominator separately: lim_{x→a} f(x)/g(x) = lim_{x→a} f\'(x)/g\'(x), provided the new limit exists. Example: lim_{x→0} sin x / x → 0/0, apply L\'Hôpital: lim cos x / 1 = cos 0 / 1 = 1. If the result is still indeterminate, apply the rule again. Important: you differentiate f and g separately — it is NOT the quotient rule. L\'Hôpital\'s rule can also handle ∞−∞, 0·∞, 1^∞, 0⁰, and ∞⁰ after algebraic rearrangement.',
          },
          {
            title: 'Continuity',
            content: 'A function f is continuous at x = a if three conditions all hold: (1) f(a) is defined, (2) the limit lim_{x→a} f(x) exists, and (3) the limit equals f(a). If any condition fails, f has a discontinuity at a. Types: a removable discontinuity (hole) occurs when the limit exists but doesn\'t equal f(a) — it can be fixed by redefining f(a). A jump discontinuity occurs when left and right limits exist but differ. An infinite discontinuity occurs when the limit is ±∞ (a vertical asymptote). Polynomials, exponentials, and trig functions are continuous on their entire domains.',
          },
          {
            title: 'The Intermediate Value Theorem',
            content: 'The Intermediate Value Theorem (IVT) states: if f is continuous on the closed interval [a, b] and k is any value strictly between f(a) and f(b), then there exists at least one c in (a, b) with f(c) = k. In plain terms: a continuous function cannot jump from one value to another without passing through every value in between. Practical use: to show that x³ − x − 1 = 0 has a root between 1 and 2, note f(1) = −1 (negative) and f(2) = 5 (positive). Since f is continuous and passes through 0 between −1 and 5, it must equal 0 somewhere in (1, 2). This gives existence of solutions without finding them explicitly.',
          },
        ],
      },
      {
        name: 'Derivatives',
        lessons: [
          {
            title: 'The Definition of the Derivative',
            content: 'The derivative f\'(x) is the instantaneous rate of change of f — formally defined as the limit of the average rate of change as the interval shrinks to zero: f\'(x) = lim_{h→0} [f(x+h) − f(x)] / h. Geometrically, f\'(x) is the slope of the tangent line to the graph at x. If this limit exists, we say f is differentiable at x. Note that differentiability requires continuity, but continuity does not guarantee differentiability (a corner or cusp is continuous but not differentiable). The tangent line at (a, f(a)) has equation y − f(a) = f\'(a)(x − a).',
          },
          {
            title: 'Basic Differentiation Rules',
            content: 'Rather than using the limit definition every time, use these rules: Constant rule: d/dx(c) = 0. Power rule: d/dx(xⁿ) = nxⁿ⁻¹ (works for any real n). Constant multiple: d/dx(cf) = c·f\'(x). Sum/Difference: (f±g)\'=f\'±g\'. Standard functions: d/dx(eˣ)=eˣ, d/dx(ln x)=1/x, d/dx(sin x)=cos x, d/dx(cos x)=−sin x, d/dx(tan x)=sec²x. Example: f(x) = 3x⁴ − 2x² + 5x − 7 → f\'(x) = 12x³ − 4x + 5. Practise until you can differentiate simple expressions instantly.',
          },
          {
            title: 'Product, Quotient & Chain Rules',
            content: 'For composed and combined functions: Product rule: (fg)\' = f\'g + fg\'. Quotient rule: (f/g)\' = (f\'g − fg\')/g². Chain rule (the most important of the three): d/dx f(g(x)) = f\'(g(x)) · g\'(x) — differentiate the outer function (evaluated at the inner), then multiply by the derivative of the inner. Example: d/dx sin(x²) = cos(x²) · 2x. For d/dx (3x+1)⁵ = 5(3x+1)⁴ · 3 = 15(3x+1)⁴. The chain rule applies whenever one function is inside another, and is essential for virtually every non-trivial differentiation.',
          },
          {
            title: 'Finding Maxima & Minima',
            content: 'Critical points occur where f\'(x) = 0 or f\'(x) is undefined — these are the only candidates for local maxima and minima. First Derivative Test: evaluate the sign of f\'(x) on both sides of a critical point c. If f\' changes from + to −, there is a local maximum at c. If f\' changes from − to +, there is a local minimum. Second Derivative Test: at a critical point where f\'(c) = 0, if f\'\'(c) < 0, then c is a local max; if f\'\'(c) > 0, then c is a local min; if f\'\'(c) = 0, the test is inconclusive. To find absolute extrema on a closed interval [a,b], check all critical points in (a,b) and both endpoints.',
          },
          {
            title: 'Related Rates',
            content: 'Related rates problems use the chain rule to connect the rates of change of two related quantities. Strategy: (1) Draw a diagram and label all quantities, identifying which are changing. (2) Write an equation relating those quantities (geometric formula, Pythagorean theorem, similar triangles, etc.). (3) Differentiate both sides with respect to time t using the chain rule. (4) Substitute known values and solve for the unknown rate. Example: a ladder 10 m long slides down a wall. When the base is 6 m from the wall, it slides out at 2 m/s. Using x² + y² = 100, differentiate: 2x(dx/dt) + 2y(dy/dt) = 0. With x=6, y=8, dx/dt=2: dy/dt = −12/8 = −1.5 m/s.',
          },
        ],
      },
      {
        name: 'Integration',
        lessons: [
          {
            title: 'Antiderivatives & Indefinite Integrals',
            content: 'An antiderivative of f is any function F where F\'(x) = f(x). The indefinite integral ∫f(x) dx denotes the most general antiderivative, always written with a constant of integration +C (because differentiating any constant gives 0, so there are infinitely many antiderivatives differing by a constant). Basic antiderivatives: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ −1). ∫1/x dx = ln|x| + C. ∫eˣ dx = eˣ + C. ∫cos x dx = sin x + C. ∫sin x dx = −cos x + C. ∫sec²x dx = tan x + C. The power rule for integration is the reverse of the power rule for differentiation.',
          },
          {
            title: 'The Fundamental Theorem of Calculus',
            content: 'The Fundamental Theorem of Calculus (FTC) is the central result connecting differentiation and integration. Part 1 (Differentiation of an integral): d/dx ∫ₐˣ f(t) dt = f(x) — differentiating an integral with a variable upper limit gives back the integrand. Part 2 (Evaluation): ∫ₐᵇ f(x) dx = F(b) − F(a), where F is any antiderivative of f. This means a definite integral gives a single number equal to the net signed area between the curve and the x-axis. Example: ∫₀² x² dx = [x³/3]₀² = 8/3 − 0 = 8/3. The FTC is perhaps the most important theorem in all of calculus.',
          },
          {
            title: 'U-Substitution',
            content: 'U-substitution is the chain rule run in reverse — it handles integrals of composite functions. Identify an inner function u = g(x), compute du = g\'(x) dx, and rewrite the integral entirely in terms of u. Example: ∫2x cos(x²) dx. Let u = x², then du = 2x dx. The integral becomes ∫cos(u) du = sin(u) + C = sin(x²) + C. The skill is choosing u wisely: usually let u be the expression inside a complicated function. After integrating in u, always substitute back to the original variable x. For definite integrals, also change the limits: when x = a, u = g(a); when x = b, u = g(b).',
          },
          {
            title: 'Integration by Parts',
            content: 'Integration by parts reverses the product rule: ∫u dv = uv − ∫v du. The key is choosing u and dv well. The LIATE priority helps choose u: Logarithms > Inverse trig > Algebraic (polynomials) > Trig > Exponential — pick u as the function type appearing earliest in this list. Example: ∫x eˣ dx. Choose u = x (algebraic, comes before exponential) and dv = eˣ dx. Then du = dx and v = eˣ. Apply the formula: x eˣ − ∫eˣ dx = x eˣ − eˣ + C = eˣ(x − 1) + C. Verify by differentiating: d/dx[eˣ(x−1)] = eˣ(x−1) + eˣ = xeˣ ✓.',
          },
          {
            title: 'Area Between Curves',
            content: 'To find the area between two curves y = f(x) and y = g(x) over [a,b] where f(x) ≥ g(x): Area = ∫ₐᵇ [f(x) − g(x)] dx. Always subtract the lower curve from the upper curve. If the curves cross within [a,b], split the integral at the crossing point(s) and ensure you always subtract the lower from the upper in each sub-interval. To find the intersection points, set f(x) = g(x) and solve. Example: area between y = x² and y = x from 0 to 1: ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6 square units.',
          },
        ],
      },
      {
        name: 'Applications of Calculus',
        lessons: [
          {
            title: 'Optimization Problems',
            content: 'Optimization uses derivatives to find the maximum or minimum value of a quantity subject to a constraint. Standard approach: (1) Read carefully and define variables. (2) Write the objective function (the quantity to maximise or minimise) in terms of one variable, using the constraint to eliminate others. (3) Differentiate, set equal to zero, find critical points. (4) Verify using the second derivative test or by checking endpoints. Classic example: a farmer has 100 m of fence to enclose a rectangular area. Maximise A = xy subject to 2x + 2y = 100 → y = 50 − x, A = x(50−x) = 50x − x². dA/dx = 50 − 2x = 0 → x = 25, y = 25. Maximum area = 625 m² (a square).',
          },
          {
            title: 'The Mean Value Theorem',
            content: 'The Mean Value Theorem (MVT) states: if f is continuous on [a,b] and differentiable on (a,b), there exists at least one c in (a,b) where f\'(c) = (f(b)−f(a))/(b−a). In plain terms: the instantaneous rate of change at some point equals the average rate of change over the interval. Geometrically: the tangent line at some interior point is parallel to the secant line connecting the endpoints. Real-world interpretation: if you average 60 mph over a 2-hour drive, you were travelling at exactly 60 mph at some moment during the trip. The MVT is the backbone of many theoretical results in calculus.',
          },
          {
            title: 'Riemann Sums & Definite Integrals',
            content: 'A Riemann sum approximates the area under a curve by dividing the interval [a,b] into n subintervals of width Δx = (b−a)/n and summing the areas of rectangles: Σ f(xᵢ*) Δx. Left Riemann sums use the left endpoint of each subinterval; right sums use the right endpoint; midpoint sums use the midpoint. As n → ∞ (rectangles become infinitely thin), all three methods converge to the definite integral ∫ₐᵇ f(x) dx. The definite integral represents net signed area — areas above the x-axis are positive, below are negative. The FTC then lets us bypass all this approximation and evaluate exactly.',
          },
          {
            title: 'Volumes of Revolution',
            content: 'Rotating the region under y = f(x) from x=a to x=b around the x-axis creates a solid of revolution. The Disk Method gives its volume: V = π ∫ₐᵇ [f(x)]² dx — each thin slice is a disk of radius f(x) and thickness dx. If rotating around the y-axis, the Shell Method is often easier: V = 2π ∫ₐᵇ x f(x) dx — each shell has radius x, height f(x), and thickness dx. Example: rotating y = √x from 0 to 4 around the x-axis: V = π ∫₀⁴ x dx = π [x²/2]₀⁴ = π(8) = 8π cubic units.',
          },
          {
            title: 'Differential Equations (Introduction)',
            content: 'A differential equation relates a function to its derivatives. The simplest type is separable: dy/dx = f(x)g(y). Separate variables by dividing both sides by g(y) and multiplying by dx: dy/g(y) = f(x) dx. Then integrate both sides. Example: dy/dx = ky (exponential growth/decay model) → dy/y = k dx → ln|y| = kx + C → y = Aeᵏˣ. If k > 0, the quantity grows exponentially (population growth, compound interest). If k < 0, it decays (radioactive decay, cooling). The constant A is determined from an initial condition — a given value of y at a specific x.',
          },
        ],
      },
    ],
  },
];

import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Reads from Expo public env vars. For local development these point at the
// stack started by `supabase start` (see .env.example). They are safe to ship
// to the client: the anon key is meant to be public and is protected by RLS.
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      // Persist sessions with AsyncStorage so it works on native + web.
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });
} else {
  // No env configured -> the app keeps falling back to local AsyncStorage.
  console.warn(
    '[supabase] EXPO_PUBLIC_SUPABASE_URL / EXPO_PUBLIC_SUPABASE_ANON_KEY not set. ' +
      'Run `supabase start` and copy .env.example to .env to enable the Postgres backend.'
  );
}

export const isSupabaseEnabled = !!supabase;
export { supabase };

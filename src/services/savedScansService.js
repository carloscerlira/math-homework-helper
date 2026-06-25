import { supabase, isSupabaseEnabled } from './supabaseClient';

// Thin data-access layer for the `saved_scans` table.
//
// It returns rows shaped exactly like the objects used today in
// SavedContext.js ({ id, photoUri, analysisText, savedAt }) so screens can
// consume it without changes. When Supabase is not configured, every call
// throws `SupabaseDisabledError` and the caller should fall back to
// AsyncStorage.

export class SupabaseDisabledError extends Error {
  constructor() {
    super('Supabase is not configured. Set EXPO_PUBLIC_SUPABASE_* env vars.');
    this.name = 'SupabaseDisabledError';
  }
}

function toItem(row) {
  return {
    id: row.id,
    photoUri: row.photo_uri,
    analysisText: row.analysis_text,
    savedAt: row.saved_at,
  };
}

export async function listSavedScans() {
  if (!isSupabaseEnabled) throw new SupabaseDisabledError();
  const { data, error } = await supabase
    .from('saved_scans')
    .select('*')
    .order('saved_at', { ascending: false });
  if (error) throw error;
  return data.map(toItem);
}

export async function createSavedScan({ photoUri, analysisText }) {
  if (!isSupabaseEnabled) throw new SupabaseDisabledError();
  const { data, error } = await supabase
    .from('saved_scans')
    .insert({ photo_uri: photoUri, analysis_text: analysisText })
    .select()
    .single();
  if (error) throw error;
  return toItem(data);
}

export async function deleteSavedScan(id) {
  if (!isSupabaseEnabled) throw new SupabaseDisabledError();
  const { error } = await supabase.from('saved_scans').delete().eq('id', id);
  if (error) throw error;
}

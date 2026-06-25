-- Initial schema for math-homework-helper
-- Mirrors the shape persisted today in src/context/SavedContext.js
-- (id, photoUri, analysisText, savedAt) so the app can move from
-- AsyncStorage/localStorage to Postgres without changing its data model.

create table if not exists public.saved_scans (
  id            uuid primary key default gen_random_uuid(),
  photo_uri     text        not null,
  analysis_text text        not null,
  saved_at      timestamptz not null default now(),
  -- optional owner column for when auth is added later; nullable for now
  user_id       uuid
);

-- Most recent first, matching the current UI ordering.
create index if not exists saved_scans_saved_at_idx
  on public.saved_scans (saved_at desc);

-- Row Level Security. Enabled by default; the policy below is permissive so
-- the local/anon demo works out of the box. Tighten with auth.uid() = user_id
-- once authentication is wired in.
alter table public.saved_scans enable row level security;

create policy "saved_scans are accessible to anon (local demo)"
  on public.saved_scans
  for all
  using (true)
  with check (true);

-- RLS controls row visibility, but the API roles still need table privileges.
grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.saved_scans to anon, authenticated;

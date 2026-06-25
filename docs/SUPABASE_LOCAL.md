# Local Supabase (Postgres) backend

This app stores saved scans in `AsyncStorage` (which is `localStorage` on web).
That data never leaves the device and can't be shared or queried. This guide
adds a **local Postgres** backed by the Supabase CLI so the app can persist to a
real database — and the same code points at hosted Supabase later with only an
env change.

## What's included

- `supabase/config.toml` — local stack config (`supabase init`).
- `supabase/migrations/*_init_saved_scans.sql` — `saved_scans` table that mirrors
  the current data shape (`id`, `photoUri`, `analysisText`, `savedAt`).
- `src/services/supabaseClient.js` — Supabase client, enabled only when env vars
  are present (otherwise the app keeps using AsyncStorage).
- `src/services/savedScansService.js` — `list / create / delete` helpers that
  return rows in the exact shape `SavedContext` already uses.
- `.env.example` — local defaults to copy into `.env`.

## Requirements

- [Docker](https://docs.docker.com/get-docker/) running.
- Supabase CLI — already a dev dependency, so `npx supabase ...` works. Scripts
  are also wired in `package.json` (`npm run db:start`, `db:stop`, `db:reset`).

## Quick start

```bash
# 1. Start the local stack (Postgres + Studio + API). First run pulls images.
npm run db:start          # = supabase start

# 2. Apply migrations (creates the saved_scans table).
npm run db:reset          # = supabase db reset

# 3. Configure the app env.
cp .env.example .env      # local defaults already filled in

# 4. Run Expo (clear cache so it picks up the new env).
npx expo start --clear
```

`supabase start` prints the local **API URL** (`http://localhost:54321`), the
**anon key**, and a **Studio URL** (`http://localhost:54323`) where you can
browse the `saved_scans` table.

> On a physical device, replace `localhost` in `.env` with your computer's LAN
> IP (e.g. `http://192.168.1.50:54321`) — `localhost` would resolve to the phone.

## Wiring it into the app

`SavedContext` can switch from AsyncStorage to Postgres without changing screens.
Replace the storage calls with the service (it returns the same object shape):

```js
import {
  listSavedScans,
  createSavedScan,
  deleteSavedScan,
} from '../services/savedScansService';
import { isSupabaseEnabled } from '../services/supabaseClient';

// hydrate
const items = isSupabaseEnabled ? await listSavedScans() : /* AsyncStorage */;

// save
isSupabaseEnabled
  ? await createSavedScan({ photoUri, analysisText })
  : /* AsyncStorage */;

// delete
isSupabaseEnabled ? await deleteSavedScan(id) : /* AsyncStorage */;
```

This PR keeps the wiring **opt-in**: with no env configured the app behaves
exactly as before, so nothing breaks for contributors who don't run Supabase.

## Stopping

```bash
npm run db:stop           # = supabase stop (data persists between restarts)
```

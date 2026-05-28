# Visitor analytics (Firebase RTDB + Vercel)

## Firebase Realtime Database shape

```json
{
  "visitors": {
    "totalUniqueCount": 0,
    "totalBotCount": 0,
    "ids": {
      "visitor_abc123": {
        "visitorId": "abc123",
        "ip": "103.12.55.10",
        "device": "desktop",
        "os": "Windows",
        "browser": "Chrome",
        "userAgent": "Mozilla/5.0...",
        "creation_timestamp": 1710000000,
        "owner": "Sadat",
        "path": "/home",
        "referrer": "",
        "language": "en-US",
        "country": "BD",
        "isBot": false
      }
    }
  }
}
```

## RTDB security rules

In Firebase Console → Realtime Database → Rules, deny public writes:

```json
{
  "rules": {
    "visitors": {
      ".read": false,
      ".write": false
    }
  }
}
```

Only the Vercel API (Admin SDK) writes data.

## Environment variables

Add to `.env` (local, for `vercel dev`) and **Vercel → Project → Settings → Environment Variables**:

| Variable | Example |
|----------|---------|
| `FIREBASE_DATABASE_URL` | `https://sadat-sanchay-default-rtdb.asia-southeast1.firebasedatabase.app/` |
| `FIREBASE_PROJECT_ID` | from service account JSON |
| `FIREBASE_CLIENT_EMAIL` | `firebase-adminsdk-...@....iam.gserviceaccount.com` |
| `FIREBASE_PRIVATE_KEY` | full private key with `\n` for newlines |
| `VISITOR_OWNER` | `Sadat` (optional) |

**Never commit** the Firebase Admin JSON file. Use env vars only.

### Private key on Vercel

Paste the key in one line with literal `\n` between lines, or use Vercel's multiline secret field.

## Local development (recommended)

Use **`npm run dev`** (not `npm run dev:api` unless you need Vercel’s emulator):

```bash
npm install
npm run dev
```

`vercel dev` (`npm run dev:api`) can cause blank pages; `npm run dev` avoids that.

This runs **both**:

- React on http://localhost:3000 (`npm start`)
- Visitor API on http://localhost:3001 (proxied via `src/setupProxy.js`)

Ensure `FIREBASE_*` vars are in `.env` at the project root.

### Local test checklist

1. Put `FIREBASE_*` vars in `.env` (or `.env.local` after `vercel link`).
2. Run `npm run dev:api` (needs [Vercel CLI](https://vercel.com/docs/cli); first time: `vercel login` + link project).
3. Open http://localhost:3000 in the browser.
4. Open DevTools → **Application** → **Local Storage** → delete key `portfolio_visitor` (to simulate first visit).
5. Hard refresh the page.
6. **Console** should show: `Thanks for visiting my portfolio !!!`
7. **Network** tab → filter `visitor` → `POST /api/visitor` → status **200**.
8. **Firebase Console** → Realtime Database → `visitors` → `totalUniqueCount` and `ids/visitor_...`.

Return visit: refresh again — no console message, no new `/api/visitor` call.

### If React crashes with `digital envelope routines::unsupported`

Use Node 18 LTS, or run `npm run dev:api` (sets OpenSSL legacy flag for old `react-scripts`).

## Production (Vercel)

1. Push to GitHub and connect the repo in Vercel.
2. Set build command: `npm run build`
3. Output directory: `build`
4. Add all `FIREBASE_*` env vars.
5. Deploy.

## Client behavior

- First visit (no `localStorage`): logs `Thanks for visiting my portfolio !!!`, saves visitor id, calls `POST /api/visitor`.
- Return visits: does nothing.

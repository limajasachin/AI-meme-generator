// ─────────────────────────────────────────────────────────────────────────────
//  PRODUCTION BACKEND  —  Vercel Function for POST /api/memes.
//
//  Shares the exact same logic as the local Express backend
//  (server/index.js) via server/memes-core.js, so behaviour is identical
//  in dev (`npm run dev`) and in production.
//
//  Contract the frontend depends on:
//    POST /api/memes   body: { category }   ->   { memes: [{ id, imageUrl, caption }] }
// ─────────────────────────────────────────────────────────────────────────────
import { createMemes } from '../server/memes-core.js'

export default async function handler(req, res) {
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const memes = await createMemes(body?.category)
    res.status(200).json({ memes })
  } catch (err) {
    const status = err.status ?? 502
    if (status >= 500) {
      console.error('[/api/memes] failed:', err.message)
    }
    res.status(status).json({
      error: status === 400 ? err.message : 'Failed to generate memes',
    })
  }
}
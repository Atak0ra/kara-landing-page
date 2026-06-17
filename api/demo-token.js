/**
 * Vercel Serverless Function
 * Retourne l'URL d'auto-login pour la démo KARA.
 *
 * Variable d'environnement à définir sur Vercel :
 *   DEMO_ACCESS_TOKEN = votre_token_secret
 *
 * Endpoint : GET /api/demo-token
 * Réponse  : { "url": "https://demo-kara.compeel.com/auto-login?token=..." }
 */
export default function handler(req, res) {
  const token = process.env.DEMO_ACCESS_TOKEN;

  if (!token) {
    return res.status(404).json({ error: 'Token non configuré' });
  }

  res.setHeader('Cache-Control', 'public, max-age=3600'); // cache 1h
  res.status(200).json({
    url: `https://demo-kara.compeel.com/auto-login?token=${token}`
  });
}

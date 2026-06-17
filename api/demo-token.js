/**
 * Vercel Serverless Function
 * Retourne l'URL d'auto-login pour la démo KARA.
 *
 * Variable d'environnement à définir sur Vercel :
 *   DEMO_ACCESS_TOKEN = DEMO_2025_KARA_X7mP9q  (ou votre token)
 *
 * Endpoint : GET /api/demo-token
 * Réponse  : { "url": "https://demo-kara.compeel.com/auth/auto-login?token=..." }
 */
module.exports = function handler(req, res) {
  const token = process.env.DEMO_ACCESS_TOKEN;

  if (!token) {
    return res.status(404).json({ error: 'Token non configuré' });
  }

  res.setHeader('Cache-Control', 'public, max-age=3600'); // cache 1h
  res.status(200).json({
    url: `https://demo-kara.compeel.com/auth/auto-login?token=${token}`
  });
};

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // Limitar a 100 solicitudes por IP por ventana
});

module.exports = limiter;

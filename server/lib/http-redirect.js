const isSecure = req => {
  if (req.secure) {
    return true;
  }
  // azure
  if (req.headers['x-arr-log-id']) {
    return typeof req.headers['x-arr-ssl'] === 'string';
  }
  // aws
  return req.headers['x-forwarded-proto'] === 'https';
};

const httpsRedirectMiddleware = redirectLocalhost => (req, res, next) => {
  if (req.hostname === 'localhost' && !redirectLocalhost) {
    return next();
  }
  if (isSecure(req)) {
    return next();
  }

  return res.redirect(`https://${req.hostname}${req.originalUrl}`);
};

module.exports = httpsRedirectMiddleware;

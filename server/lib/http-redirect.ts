
import { Request, Response, NextFunction } from 'express';

const isSecure = (req: Request): boolean => {
  if (req.secure) {
    return true;
  }
  if (req.headers['x-arr-log-id']) {
    return typeof req.headers['x-arr-ssl'] === 'string';
  }
  return req.headers['x-forwarded-proto'] === 'https';
};

const httpsRedirectMiddleware = (redirectLocalhost = false) => (
  req: Request, res: Response, next: NextFunction,
): Response['redirect'] | NextFunction | void => {
  if (req.hostname === 'localhost' && !redirectLocalhost) {
    return next();
  }
  if (isSecure(req)) {
    return next();
  }

  return res.redirect(`https://${req.hostname}${req.originalUrl}`);
};

export default httpsRedirectMiddleware;

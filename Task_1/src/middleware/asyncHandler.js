// middleware function to catch errors in async route handlers without having to use try-catch in each route handler
export default (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
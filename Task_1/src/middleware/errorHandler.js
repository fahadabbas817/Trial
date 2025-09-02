export default (err, req, res, next) => {
  
  console.error(err);

  
  if (res.headersSent) return next(err);

  const status = err.statusCode || err.status || 500;
  const body = { error: err.message || 'Internal Server Error' };


  res.status(status).json(body);
};
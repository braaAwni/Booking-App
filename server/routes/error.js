
const serverError = (err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.errMessage || "something wont woring ";
  res.status(errStatus).json({
    sucssess: false,
    message: errMessage,
    status: errStatus,
    stack: err.stack,
  });
};
export default serverError;

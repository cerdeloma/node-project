function errorHandler(err, req, res, next) {
  console.error(err.stack);

  res.status(500).json({
    message: "Algo deu errado no servidor 😬",
    error: err.message,
  });
}

module.exports = errorHandler;

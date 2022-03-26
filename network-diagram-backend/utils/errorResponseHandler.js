const errorResponseHandler = (ctx, error) => {
  ctx.status = error.status ? error.status : 500;
  ctx.body = {
    status: "fail",
    statusCode: error.status ? error.status : 500,
    message: error.message
    ? error.message
    : "Something went wrong when creating a new cable type."
  };
};

module.exports = { errorResponseHandler };

const successResponseHandler = (ctx, data, message) => {
  ctx.status = 200;
  ctx.body = {
    status: "success",
    data,
    message
  };
};

module.exports = { successResponseHandler };

const koa = require("koa");
const koaBody = require("koa-body");
const cors = require("koa2-cors");
const mongoose = require("mongoose");
require('dotenv').config();
const allRoutes = require("./index.route");

const app = new koa();

const options = {
  origin: "*"
};

const mongoDB = process.env.db_connection_url;
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Database connected...`);
  });

app
  .use(koaBody())
  .use(cors(options))
  .use(allRoutes.routes())
  .use(allRoutes.allowedMethods());

app.listen(process.env.port);

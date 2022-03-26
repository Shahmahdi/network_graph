const Router = require("koa-router");
const router = new Router();
const {
  addCableType,
  getCableType,
  updateCableType,
  deleteCableType,
  getAllCableTypes
} = require("./cableType.controller");

router
  .get("/cableTypes", getAllCableTypes)
  .post("/cableTypes", addCableType)
  .get("/cableTypes/:id", getCableType)
  .patch("/cableTypes/:id", updateCableType)
  .delete("/cableTypes/:id", deleteCableType);

module.exports = router;

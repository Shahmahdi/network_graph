const Router = require("koa-router");
const router = new Router();
const {
  getAllJunctions,
  addJunction,
  getJunction,
  updateJunction,
  // updateJunctionAddress,
  // updateJunctionStatus,
  // updateJunctionType,
  // updateUplinkJunction,
  // updateElectricSource,
  // updateUninstallDate,
  // updateNote,
  deleteJunction
} = require("./junction.controller");

router
  .get("/junctions", getAllJunctions)
  .post("/junctions", addJunction)
  .get("/junctions/:id", getJunction)
  .put("/junctions/:id", updateJunction)
  // .patch("/junctions/:id/address", updateJunctionAddress)
  // .patch("/junctions/:id/status", updateJunctionStatus)
  // .patch("/junctions/:id/type", updateJunctionType)
  // .patch("/junctions/:id/uplinkJunction", updateUplinkJunction)
  // .patch("/junctions/:id/electricSource", updateElectricSource)
  // .patch("/junctions/:id/uninstallDate", updateUninstallDate)
  // .patch("/junctions/:id/note", updateNote)
  .delete("/junctions/:id", deleteJunction);

module.exports = router;

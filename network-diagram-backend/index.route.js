const Router = require("koa-router");
const junctionRoutes = require("./modules/junction/junction.route");
const cableTypesRoutes = require("./modules/cableType/cableType.route");

const router = new Router();

router.use(junctionRoutes.routes());
router.use(cableTypesRoutes.routes());

module.exports = router;

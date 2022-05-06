const router = require("express").Router();

router.use("/eater", require('./eater.routes'))
router.use("/restaurant", require('./restaurant.routes'))

module.exports = router;

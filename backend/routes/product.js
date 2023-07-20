const express = require("express");
const router = express.Router();

const jerseyCtrl = require("../controllers/jersey");

router.post("/api/product/football", jerseyCtrl.createJersey);
router.get("/api/product/football", jerseyCtrl.getJersey);

module.exports = router
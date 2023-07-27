const express = require("express");
const router = express.Router();

const jerseyCtrl = require("../controllers/jersey");

router.get("/api/product/football", jerseyCtrl.getJersey);
router.get("/api/product/football/:id", jerseyCtrl.getOneJersey)

module.exports = router
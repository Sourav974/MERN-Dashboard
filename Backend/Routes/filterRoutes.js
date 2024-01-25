const express = require("express");
const filterController = require("../Controller/filterController");

const router = express.Router();

router.get("/getAll", filterController.getAllResults);
router.get("/filterByEndYear", filterController.filterByEndYear);
router.get("/filterByTopic", filterController.filterByTopic);
router.get("/filterBySector", filterController.filterBySector);
router.get("/filterByRegion", filterController.filterByRegion);
router.get("filterByPest", filterController.filterByPEST);
router.get("/filterBySource", filterController.filterBySource);
router.get("/filterBySWOT", filterController.filterBySWOT);
router.get("/filterByCountry", filterController.filterByCountry);
router.get("/filterByCity", filterController.filterByCity);

module.exports = router;

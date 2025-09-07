const express = require("express");
const router = express.Router();

const d3headCnnection = require("./connection/d3.js");
const d2headCnnection = require("./connection/d2.js");

router.get("/3d/java/username/:username", d3headCnnection.java_username);
router.get("/3d/java/uuid/:uuid", d3headCnnection.java_uuid);
router.get("/3d/bedrock/username/:username", d3headCnnection.bedrock_username);
router.get("/3d/bedrock/uuid/:uuid", d3headCnnection.bedrock_uuid);

router.get("/2d/java/username/:username", d2headCnnection.java_username);
router.get("/2d/java/uuid/:uuid", d2headCnnection.java_uuid);
router.get("/2d/bedrock/username/:username", d2headCnnection.bedrock_username);
router.get("/2d/bedrock/uuid/:uuid", d2headCnnection.bedrock_uuid);

module.exports = router;
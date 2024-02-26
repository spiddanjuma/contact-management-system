const express = require("express");
const router = express.Router();
const {getContact, getContacts, creatContact, deleteContact, updateContact} = require("../Controllers/contactController");
const validateToken = require("../Middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContact).post(creatContact);
router.route("/:id").get(getContacts).put(updateContact).delete(deleteContact);

module.exports = router;
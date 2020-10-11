const router = require("express").Router();
const { getUser, getUsers } = require('../controllers/users')

router.get("/users", getUsers);
router.get("/users/:id", getUser);

module.exports = router;

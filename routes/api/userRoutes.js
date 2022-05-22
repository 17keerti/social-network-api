const router = require("express").Router();

const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// router.route("/:id/friends/friendsId").post(addFriend).delete(deleteFriend);

module.exports = router;

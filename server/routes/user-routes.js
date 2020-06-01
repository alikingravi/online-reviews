const router = require("express").Router();
const User = require("../models/User");
const Review = require("../models/Review");
const verify = require("./verify-token");

// Get all users.
router.get("/list", verify, async (req, res) => {
  const user = await User.findOne({
    where: { id: req.user._id },
    attributes: ["id", "name", "email", "admin"],
  });

  if (!user) res.sendStatus(404).send("User not found");

  // Only an admin can get all users
  if (user.admin) {
    const users = await User.findAll();
    if (!users) res.status(404).send("No users found");
    res.send(users);
  } else {
    res.status(401).send("You do not have permission to access this resource");
  }
});

// Delete a single user
router.post("/delete", verify, async (req, res) => {
  const user = await User.findOne({
    where: { id: req.user._id },
  });

  if (!user) res.sendStatus(404).send("User not found");

  // Only an admin can delete a user
  if (user.admin) {
    const userId = Number(req.body.id);
    const deleteUser = await User.destroy({
      where: {
        id: userId,
      },
    });

    if (!deleteUser) return res.status(404).send("User could not be deleted");

    // Delete all user reviews as well
    const deleteReviews = await Review.destroy({
      where: {
        userId: userId,
      },
    });

    if (!deleteReviews)
      return res.status(404).send("User reviews could not be deleted");

    res.json({ id: userId });
  } else {
    res.status(401).send("You do not have permission to perform this action");
  }
});

module.exports = router;

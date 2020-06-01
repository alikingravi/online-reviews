const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const verify = require("./verify-token");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  // Validate input
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if email exists
  const existingUser = await User.findOne({ where: { email: req.body.email } });
  if (existingUser)
    return res
      .status(400)
      .send("Username or password is invalid, please try again.");

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // save user to db
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    admin: req.body.admin,
  });

  if (!user) res.sendStatus(404);

  // jwt token
  const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);

  const userJson = user.toJSON();
  res.status(200).send({ user: userJson, token });
});

router.post("/login", async (req, res) => {
  // validate data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if email exists
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(400).send("Username or password is invalid");

  // check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res.status(400).send("Username or password is invalid");

  // jwt token
  const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
  // res.header('auth-token', token).send(token);

  const userJson = {
    id: user.id,
    name: user.name,
    email: user.email,
    admin: user.admin,
  };

  res.json({ token: token, user: userJson });
});

router.get("/user", verify, async (req, res) => {
  const user = await User.findOne({
    where: { id: req.user._id },
    attributes: ["id", "name", "email", "admin"],
  });

  if (!user) res.status(404).send("No user exists");

  res.json({ user });
});

module.exports = router;

const router = require("express").Router();
const User = require("../models/User");
const Review = require("../models/Review");
const Product = require("../models/Product");
const verify = require("./verify-token");
const { reviewValidation } = require("../validation");
const { QueryTypes } = require("sequelize");
const db = require("../config/database");

// Get all user reviews
router.get("/list", verify, async (req, res) => {
  const userId = req.user._id;
  const reviews = await db.query(
    "SELECT * FROM `reviews` INNER JOIN `products` ON `reviews`.`productId` = `products`.`id` WHERE userId = :userId",
    {
      type: QueryTypes.SELECT,
      replacements: { userId: userId },
    }
  );

  if (!reviews) res.sendStatus(404).send("No reviews found");

  res.send(reviews);
});

// Create new review
router.post("/create-review/:productId", verify, async (req, res) => {
  const userId = Number(req.user._id);
  const productId = Number(req.params.productId);

  // Validate input
  const { error } = reviewValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check product exists
  const product = await Product.findOne({
    where: { id: productId },
  });
  if (!product) return res.status(400).send("Product not found");

  // check review already exists
  const reviewExists = await Review.findOne({
    where: { userId: userId, productId: productId },
  });
  if (reviewExists)
    return res.status(400).send("You have already reviewed this product.");

  // create review
  const review = await Review.create({
    userId: userId,
    productId: productId,
    title: req.body.title,
    rating: req.body.rating,
    reviewtext: req.body.reviewtext,
    recommend: req.body.recommend,
  });

  if (!review) res.sendStatus(404);

  const { id, title, rating, reviewtext, recommend, createdAt } = review;
  const { name, price, imageUrl, youtubeId } = product;

  const reviewJson = {
    id,
    userId,
    productId,
    title,
    rating,
    reviewtext,
    recommend,
    createdAt,
    name,
    price,
    imageUrl,
    youtubeId,
  };

  res.status(200).send({ reviewJson });
});

module.exports = router;

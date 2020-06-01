const router = require("express").Router();
const User = require("../models/User");
const Review = require("../models/Review");
const Product = require("../models/Product");
const verify = require("./verify-token");
const db = require("../config/database");
const { QueryTypes } = require("sequelize");

// Get average product rating
router.get("/avg-rating", verify, async (req, res) => {
  const productRatings = await db.query(
    "SELECT `productId`, AVG(rating) as rating FROM `reviews` GROUP BY `productId`",
    {
      type: QueryTypes.SELECT,
    }
  );
  if (!productRatings) res.sendStatus(404).send("No ratings found");

  res.send(productRatings);
});

// Get reviews by product id
router.get("/reviews/:productId", verify, async (req, res) => {
  const productId = Number(req.params.productId);
  const productReviews = await Review.findAll({
    where: { productId: productId },
  });

  if (!productReviews) res.sendStatus(404).send("No ratings found");

  res.send(productReviews);
});

module.exports = router;

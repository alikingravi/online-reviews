const router = require("express").Router();
const User = require("../models/User");
const Review = require("../models/Review");
const Product = require("../models/Product");
const verify = require("./verify-token");
const { productValidation } = require("../validation");

// Get all products
router.get("/list", verify, async (req, res) => {
  const products = await Product.findAll({ raw: true });
  if (!products) res.sendStatus(404).send("No products found");

  const productReviews = await Review.findAll({
    where: { userId: req.user._id },
  });

  // Add isReviewed flag if the user has already reviewed this product
  if (productReviews) {
    productReviews.map((prod) => {
      const foundIndex = products.findIndex(
        (product) => product.id === prod.productId
      );
      products[foundIndex].isReviewed = true;
    });
  }

  res.send(products);
});

// Get a single product
router.get("/:id", verify, async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) res.sendStatus(404).send("Product not found");

  res.json({ product });
});

// Create new product
router.post("/create-product", verify, async (req, res) => {
  // Validate input
  const { error } = productValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // create product
  const product = await Product.create({
    name: req.body.name,
    price: Number(req.body.price),
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    youtubeId: req.body.youtubeId,
  });

  if (!product) res.sendStatus(404);

  res.json({ product });
});

// Delete a single product
router.post("/delete", verify, async (req, res) => {
  const user = await User.findOne({
    where: { id: req.user._id },
  });

  if (!user) res.sendStatus(404).send("User not found");

  // Only an admin can delete a product
  if (user.admin) {
    const productId = Number(req.body.id);
    const deleteProduct = await Product.destroy({
      where: {
        id: productId,
      },
    });

    if (!deleteProduct)
      return res.status(404).send("Product could not be deleted");

    res.json({ id: productId });
  } else {
    res.status(401).send("You do not have permission to perform this action");
  }
});

module.exports = router;

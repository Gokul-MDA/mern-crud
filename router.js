const express = require("express");
const router = express.Router();
const userRouter = require("./userSchema.js");

//Create route
router.post("/create", (req, res) => {
  var user = new userRouter({
    image: req.body.image,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dob: req.body.dob,
    mobile: req.body.mobile,
    email: req.body.email,
    address: req.body.address,
    state: req.body.state,
    country: req.body.country,
  });
  user.save();
  res.json(user);
});

//GetAll route
router.get("/", async (req, res) => {
  var findAll = await userRouter.find();
  res.json(findAll);
});

//GetOne route
router.get("/:id", async (req, res) => {
  var findOne = await userRouter.findById(req.params.id);
  res.json(findOne);
});

//Update Route
router.patch("/update/:id", async (req, res) => {
  var update = await userRouter.updateOne(
    { _id: req.params.id },
    {
      $set: {
        image: req.body.image,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dob: req.body.dob,
        mobile: req.body.mobile,
        email: req.body.email,
        address: req.body.address,
        state: req.body.state,
        country: req.body.country,
      },
    }
  );
  res.json(update);
});

//Delete Route
router.delete("/del/:id", async (req, res) => {
  var delUser = await userRouter.findByIdAndRemove(req.params.id).then((e) => {
    res.json({ message: "Deleted Successfully" });
  });
});

module.exports = router;

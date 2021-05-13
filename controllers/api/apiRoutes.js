const router = require("express").Router();
const { User,Subtier, Product } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
    
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // console.log("validated password here", validPassword);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/createaccount", async (req, res) => {
  console.log("request: ", req.body);
  try {
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      streetaddress: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      tier_id: req.body.tierchoice
    })
    req.session.save(()=> {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    })
    
    // res.status(200).end();
  } catch (err) {
    res.json(err);
  }
});

router.get('/allSubtiers', async (req, res) => {
  try {
    const subtierData = await Subtier.findAll();
    res.status(200).json(subtierData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/allProducts', async (req, res) => {
  try {
    const productData = await Product.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

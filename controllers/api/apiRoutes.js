const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  // console.log("WE HI THTE / LOGIN ROUTE!!!!!!!!!");
  try {
    // console.log("REQ .body!!!!!!!", req.body);
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
    console.log("we found him, get him", userData);
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

router.post("/createaccount", (req, res) => {
  console.log("request: ", req.body);
  try {
    User.create({
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      streetaddress: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      tier_id: req.body.tierchoice
    });
    res.status(200).end();
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;

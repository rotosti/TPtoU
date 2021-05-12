const router = require("express").Router();
const withAuth = require("../../utils/withAuth");
const { User, Subtier } = require("../../models");

router.get("/", async (req, res) => {
  const tiers = await Subtier.findAll({
    raw: true,
  });

  // console.log("Tirers from db", tiers);
  res.render("landingpage", { tiers: tiers });
});

router.get("/signup", async (req, res) => {
  const tiers = await Subtier.findAll({
    raw: true,
  });

  res.render("signup", { tiers: tiers });
});

router.get("/dashboard", withAuth, async (req, res) => {
  const userData = await User.findByPk(User.id);
  const currentSub = await User.findByPk(User.tier_id);
  const notSub = await Subtier.findAll(
    { 
      attributes: 
      {exclude: [currentSub]},
    },
  );
    console.log("dashboard route working", userData, currentSub, notSub)
  res.render("dashboard", {userData, currentSub, notSub});
});

router.get("/account", withAuth, async (req, res) => {
  res.render("account");
});

module.exports = router;

const router = require("express").Router();
const withAuth = require("../../utils/withAuth");
const { User, Subtier } = require("../../models");
const { raw } = require("express");

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
  console.log("current user ",req.session);
  const userData = await User.findByPk(req.session.user_id,{raw:true});
  const currentSub = await Subtier.findByPk(userData.tier_id,{raw:true});
  const notSub = await Subtier.findAll(
    { 
      raw:true,
      attributes: 
      {exclude: [currentSub]},
    },
  );
    console.log("dashboard route working", userData)
  res.render("dashboard", {userData:userData, currentSub, notSub});
});

router.get("/account", withAuth, async (req, res) => {
  res.render("account");
});

module.exports = router;

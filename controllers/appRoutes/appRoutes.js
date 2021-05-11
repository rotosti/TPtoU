const router = require("express").Router();
const withAuth = require("../../utils/withAuth");
const { User, SubTier } = require("../../models");

router.get("/", async (req, res) => {
  const tiers = await SubTier.findAll({
    raw: true,
  });

  // console.log("Tirers from db", tiers);
  res.render("landingpage", { tiers: tiers });
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/dashboard", withAuth, (req, res) => {
  res.render("dashboard");
});

router.get("/account", withAuth, async (req, res) => {
  res.render("account");
});

module.exports = router;

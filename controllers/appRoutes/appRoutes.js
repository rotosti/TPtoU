const router = require("express").Router();
const withAuth = require("../../utils/withAuth");
const { User, Subtier } = require("../../models");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const tiers = await Subtier.findAll({
    raw: true,
  });
  res.render("landingpage", { tiers: tiers });
});

router.get("/signup", async (req, res) => {
  const tiers = await Subtier.findAll({
    raw: true,
  });

  res.render("signup", { tiers: tiers });
});

router.get("/dashboard", withAuth, async (req, res) => {
  const userData = await User.findByPk(req.session.user_id,{raw:true});
  const currentSub = await Subtier.findByPk(userData.tier_id,{raw:true});
  const notSub = await Subtier.findAll({
    raw: true,
    where: {
      id: {[Op.not]: currentSub.id}
    }
  });

    
  res.render("dashboard", {userData:userData, currentSub:currentSub, notSub:notSub});

});

router.get("/account", withAuth, async (req, res) => {
  res.render("account");
});

module.exports = router;

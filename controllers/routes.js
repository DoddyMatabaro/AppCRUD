const express = require('express')
const router = express.Router()


// accueil route
router.get("/", (req, res) => {
    res.render(`index`);
});
router.get("/accueil", (req, res) => {
    res.render(`index`);
  });

//about
router.get("/about", (req, res) => {
  res.render(`about`);
});



module.exports = router;
const router = require("express").Router();

// list of controllers that will be execute 
const userReviewController =   require('./controller/userReviewApi');


//user review fetch and save
router.get('/loadreviews', userReviewController.getReviews);

module.exports = router;
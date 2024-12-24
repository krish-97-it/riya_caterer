const router = require("express").Router();

// list of controllers that will be execute 
const userReviewController  =   require('./controller/userReviewApi');
const workGalleryController =   require('./controller/workGalleryApi');


//user review fetch and save
router.get('/loadreviews', userReviewController.getReviews);
router.get('/loadgallery', workGalleryController.getGallery);

module.exports = router;
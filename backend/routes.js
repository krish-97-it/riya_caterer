const router = require("express").Router();

// list of controllers that will be execute 
const userReviewController  =   require('./controller/userReviewApi');
const workGalleryController =   require('./controller/workGalleryApi');
const userQueryController   =   require('./controller/sendQueryApi');


//user review fetch
router.get('/loadreviews', userReviewController.getReviews);

//gallery images fetch
router.get('/loadgallery', workGalleryController.getGallery);

//user query submit apis
router.post('/submitQueries', userQueryController.saveUserQuery)

module.exports = router;
const router = require("express").Router();

// list of controllers that will be execute 
const userReviewController  =   require('./controller/userReviewApi');
const workGalleryController =   require('./controller/workGalleryApi');
const userQueryController   =   require('./controller/sendQueryApi');
const foodPackageController =   require('./controller/packageDataApi');
const bookingFormController =   require('./controller/bookingFormApi');


//user review fetch
router.get('/loadreviews', userReviewController.getReviews);

//gallery images fetch
router.get('/loadgallery', workGalleryController.getGallery);

//Food Package Details fetch
router.get('/getPackageDetails', foodPackageController.getFoodPackage);

//user query submit apis
router.post('/submitQueries', userQueryController.saveUserQuery);

//user query submit apis
router.post('/submitBooking', bookingFormController.saveBookingData);


module.exports = router;
const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.get('/rides', controllers.getAllRides);
router.get('/reviews', controllers.getAllReviews);
router.post('/reviews', controllers.createReview);
router.put('/reviews/:id', controllers.updateReview);
router.delete('/reviews/:id', controllers.deleteReview);
router.get('/reviews/:name', controllers.getByRideName);
router.get('/rides/:name', controllers.getRideByRideName);

module.exports = router;

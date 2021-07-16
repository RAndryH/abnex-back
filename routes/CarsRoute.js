const   express = require('express'),
        router = express.Router();
        carsController = require('../controllers/carsController');

        /** Router when user post new comment */
        router.post('/', carsController.create);
        /** Router to get all cars */
        router.get('/', carsController.findAll);
        /** Router to get one car */
        router.get('/:id', carsController.findOne);

module.exports = router;
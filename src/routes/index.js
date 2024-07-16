const express = require('express');
const { BookingController } = require('../../controllers/index');
const v1ApiRoutes = require('./v1/index');

const router = express.Router();

router.post('/bookings', BookingController.create);

module.exports = router;
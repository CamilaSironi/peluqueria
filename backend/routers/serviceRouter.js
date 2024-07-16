const express = require('express');

const serviceController = require('../controllers/serviceController');

const serviceRouter = express.Router();

serviceRouter.route('/').get(serviceController.getAll)
                        .post(serviceController.create);

serviceRouter.route('/:id').get(serviceController.getOne)
                            .patch(serviceController.update)
                            .delete(serviceController.delete)

module.exports = serviceRouter;
const Pizza = require('../models/Pizza');
const { mongooesToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class PizzaController {
    index(req, res, next) {
        // [get] /pizza/
        Pizza.find({})
            .then(pizzas => {
                res.render('pizzas/index', {
                    pizzas: mutipleMongooseToObject(pizzas),
                })
                // res.status(200).json({
                //     pizzas: mutipleMongooseToObject(pizzas),
                // });
            })
            .catch(next);
    }

    detail(req, res, next) {
        //[get] /pizzas/:slug
        Pizza.findOne({ slug: req.params.slug })
            .then(pizza => {
                res.render('pizzas/detail', { pizza: mongooesToObject(pizza) });
            })
            .catch(next);
    }

   
}

module.exports = new PizzaController;
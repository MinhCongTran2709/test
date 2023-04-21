const Side = require('../models/Side');
const {mongooesToObject} = require('../../util/mongoose');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class SideController
{
    index(req, res,next)
   {
        // [get] /sides/
        Side.find({})
        .then(sides => {            
            res.render('sides/index', {
                sides: mutipleMongooseToObject(sides),
            })
        })
        .catch(next); 
   }

    detail(req, res, next)
    {
        //[get] /sides/:slug
        Side.findOne({ slug: req.params.slug})
            .then(side => {
                res.render('sides/detail', { side: mongooesToObject(side)});
            })
            .catch(next);
    }

    
}

module.exports = new SideController;
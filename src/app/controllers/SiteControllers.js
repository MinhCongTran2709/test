const Pizza = require('../models/Pizza');
const Side = require('../models/Side');
const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController
{
    // [GET] /home
    home(req, res)
    {              
        
        res.render('home')
       
    }
    // [GET] /search
    search(req, res)
    {
        res.render('search');
    }
}

module.exports = new SiteController;
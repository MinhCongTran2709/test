const newsRouter = require('./news');
const siteRouter = require('./site');
const sidesRouter = require('./sides');
const pizzasRourter = require('./pizzas')
const adminRourter = require('./admin')
function route(app) 
{   
    app.use('/search', siteRouter);
    
    app.use('/news', newsRouter);
    
    app.use('/pizzas', pizzasRourter );

    app.use('/sides', sidesRouter);  
    
    app.use('/admin', adminRourter); 
    
    app.use('/', siteRouter);
    
}

module.exports = route;
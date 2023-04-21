const Pizza = require('../models/Pizza');
const Side = require('../models/Side');
const { mongooesToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {

    //[GET] /admin/create
    create(req, res, next) {

        res.render('admin/create')

    }
   
    store(req, res, next) {
        switch (req.body.category) {
            case 'pizza':
                const pizza = new Pizza(req.body);
                pizza.save()
                    .then(() =>
                        res.redirect('/admin/create'),
                    )
                    .catch(err => {

                    });
                break;
            case 'side':
                const side = new Side(req.body);
                side.save()
                    .then(() =>
                        res.redirect('/admin/create'),
                    )
                    .catch(err => {

                    });
                break;
            default:
                res.json({ message: 'khong hop le' })
        }      

    }
    // [get] /admin/stored-pizzas
    storedPizzas(req, res, next) {
        Promise.all( [Pizza.find({}), Pizza.countDocumentsDeleted()] )
            .then(([pizzas, deleteCount]) =>
                res.render('admin/stored-pizzas', {
                    deleteCount,
                    pizzas: mutipleMongooseToObject(pizzas),
                })
            )
            .catch((next));

        // Pizza.find({})
        //     .then(pizzas => 
        //         res.render('admin/stored-pizzas', {
        //             pizzas: mutipleMongooseToObject(pizzas)
        //         }),
        //     )
        //     .catch((next));

        // Pizza.countDocumentsDeleted() 
        //     .then((deleteCount) => {
        //         console.log(deleteCount);
        //     })
        //     .catch(() => {});
    }

    // [get] /admin/stored-pizzas
    trashPizza(req, res, next)
    {
        Pizza.findDeleted({})
        .then(pizzas => res.render('admin/trash-pizzas', {
            pizzas: mutipleMongooseToObject(pizzas)
        }))
        .catch(next);
    }

    
   
    // [get] /admim/:id/edit
    edit(req, res, next) {
        Pizza.findById(req.params.id)
            .then(pizza => res.render('admin/edit',{
                pizza: mongooesToObject(pizza)
            }))
            .catch(next);

    }

    // [put] /admim/:id
    update(req, res, next)
    {
        Pizza.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/stored-pizzas'))
            .catch(next);
    }

    
    // [delete] /admim/:id
    delete(req, res, next)
    {
        Pizza.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [delete] /admim/:id/force
    forcedelete(req, res, next)
    {
        Pizza.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [patch] /admim/:id/restore
    restore(req, res, next)
    {
        
        Pizza.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    // [post] /admim/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Pizza.delete({ _id: {$in: req.body.pizzasId } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
                
            default:
                res.json({ message: ' khong hop le' });
        }
    }

    handleFormTrashActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Pizza.deleteOne({ _id: { $in: req.body.pizzasId } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            case 'restore':
                Pizza.restore({ _id: { $in: req.body.pizzasId } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: ' khong hop le' });
        }
    }
}

module.exports = new AdminController;
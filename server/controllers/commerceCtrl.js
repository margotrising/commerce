const mongoose=require('mongoose');
const Comm = mongoose.model('Commerce');

module.exports = {
    allProducts: (req, res)=>{
        Comm.find({}, (err, products)=>{
            console.log(err, products);
            res.json({result: 'succes allproducts', data: products});
        })
    },
    create: (req, res)=>{
        Comm.create(req.body, (err, product)=>{
            if(err){
                res.json({result: 'error create', errors: err})
            } else {
                res.json({result: 'sucess create', data: product})
            }
        })
    },
    update: (req, res)=>{
        Comm.update({_id: req.params.id}, {$set: req.body}, {new: true, runValidators: true}, (err, product)=>{
            if(err){
                res.json({result: 'error update', errors: err.errors})
            } else {
                res.json({result: 'success update', data: product})
            }
        })
    },
    delete: (req, res)=>{
        Comm.remove({_id: req.params.id}, (err)=>{
            if(err){
                res.json({result: 'error delete', errors: err})
            } else {
                res.json({result: 'success delete'})
            }
        })
    },
    getOne: (req,res)=>{
        Comm.find({_id: req.params.id}, (err, product)=>{
            if(err){
                res.json({result: 'error getOne', errors: err})
            } else {
                res.json({result: 'success getOne', data: product})
            }
        })
    }



}
const Product = require("../models/product");
const formidable = require("formidable")
const _ = require("lodash")
const fs = require("fs");
const product = require("../models/product");
const { sortBy } = require("lodash");


exports.getProductById = (req, res, next, id) => {
    Product.findById(id)
    .populate("category")
    .exec((err, product) => {
        if(err){
            res.status(400).json({
                error : "Product is not found"
            })
        }
        req.product = product;
        next();
    })
    
}

exports.createProduct = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if(err) {
            return res.status(400).json({
                error : "problem with image"
            });
        }

        // destructure the fields
        const { name, description, price, category, stock } = fields;

        if(
            !name ||
            !description ||
            !price ||
            !category ||
            !stock
        ){
            return res.status(400).json({
                error : "Please include all fields"
            })
        }
         
        let product = new Product(fields)

        //handle fille here
        if(file.photo){
            if(file.photo.size > 3000000)
            {
                return res.status(400).json({
                    error : "file size is too big!"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.type
        }

        //save to the DB
        product.save((err, product) => {
            if(err) {
                return res.status(400).json({
                    error : "Saving tshirt in DB is failed"
                });
            }
            res.json(product)
        });
    });
}; 

exports.getProduct = (req, res) => {
  req.product.photo = undefined
  return res.json(req.product)
}

//middleware
exports.photo = (req, res, next) => {
  if(req.product.photo.data){
    res.set("Content-Type", req.product.photo.contentType)
    return res.send(req.product.photo.data)
  }
  next()
}

//delete controllers
exports.deleteProduct = (req, res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if(err){
      return res.status(400).json({
        error : `Failed to delete ${deletedProduct.name} product`
      })
    }
    res.json({
      message: "Successfully deleted",
      deletedProduct
    })
  })
}


//update controllers
exports.updateProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
      if(err) {
          return res.status(400).json({
              error : "problem with image"
          });
      }
       
      //updation file
      let product = req.product;
      product = _.extend(product, fields)

      //handle fille here
      if(file.photo){
          if(file.photo.size > 3000000)
          {
              return res.status(400).json({
                  error : "file size is too big!"
              })
          }
          product.photo.data = fs.readFileSync(file.photo.path)
          product.photo.contentType = file.photo.type
      }

      //save to the DB
      product.save((err, product) => {
          if(err) {
              return res.status(400).json({
                  error : "Updation of product failed"
              });
          }
          res.json({product})
      });
  });
}

//product listing
exports.getAllProduct = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 50
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id"

    Product.find()
    .select("-photo")  //- sign means the property you don't want to select
    .populate("category")
    .sort([[sortBy, "asc"]])    //sort the reasult 
    .limit(limit)   //put limit on the products
    .exec((err, products) => {
        if(err) {
            return res.status(400).json({
                error : "NO product FOUND"
            });
        }
        res.json(products)
    })
}


exports.getAllUniqueCategories = (req, res) => {
    Product.distinct("category", {}, (err, category) => {
        if(err){
            return res.status(400).json({
                error: "No category found"
            })
        }
        res.json(category)
    })
}


exports .updateStock = (req, res, next) => {
    let myOperations = req.body.order.products.map( prod => {
        return {
            updateOne: {
                filter: {_id:prod._id},
                update: {$inc: {stock: -prod.count, sold: +prod.count}}
            }
        }
    })

    Product.bulkWrite(myOperations, {}, (err,products) => {
        if(err){
            return res.status(400).json({
                error: "Bulk opration is failed"
            })
        }
        next()
    })
}
const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  user = req.user;
  user.getProducts()
  .then((products) => {
     res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
   
};


exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {;
  user = req.user;
  user.createProduct({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    price: req.body.price
  })
  .then((result) => {
    res.redirect('/admin/products');
  })
  .catch((err) => {
    console.log(err)
  })
};



exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then((product) => {
    res.render('admin/edit-product', {
      product: product,
      pageTitle: 'Add Product',
      path: '/admin/products',
    });
  })
  .catch((err) => {
    //pass
  })
};


exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findByPk(prodId)
  .then(prod => {
    prod.title = req.body.title,
    prod.price = req.body.price,
    prod.description = req.body.description,
    prod.imageUrl = req.body.imageUrl
    return prod.save()
  })
  .then((result) => {
    res.redirect('/admin/products');
  })
  .catch((err) => {
    //pass
  })
};


exports.getDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId
  Product.findByPk(prodId)
  .then(prod => {
    return prod.destroy()
  })
  .then(result => {
    res.redirect("/admin/products")
  })
  .catch(err => {
    console.log(err)
  })
};
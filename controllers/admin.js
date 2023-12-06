const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(null, req.body.title, req.body.imageUrl, req.body.description, req.body.price);
  product.save();
  res.redirect('/');
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId
  Product.deleteById(prodId);
  res.redirect("/admin/products")
};

exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('admin/edit-product', {
      product: product,
      pageTitle: 'Add Product',
      path: '/admin/products',
    });
  });
  
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

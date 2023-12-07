const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  Product.save(req.body.title, req.body.imageUrl, req.body.description, req.body.price)
  .then((result) => {
    console.log(result)
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err)
  })
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.update(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  )
  .then((result) => {
    res.redirect('/admin/products');
  })
  .catch((err) => {
    //pass
  })
};

exports.getDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId
  Product.deleteById(prodId);
  res.redirect("/admin/products")
};

exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then((result) => {
    const product = result[0][0]
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

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then((result) => {
    const products = result[0]
     res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
   
};

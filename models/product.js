const Cart = require('./cart');
const db = require('../util/database')

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

static update(productId, title, imageUrl, description, price) {
  return db.execute('UPDATE products SET title = ?, imageUrl = ?, description = ?, price = ? WHERE id = ?', [title, imageUrl, description, price, productId]);
}


 static save(title, imageUrl, description, price) {
    return db.execute('INSERT INTO products (title, imageUrl, description, price) VALUES (?, ?, ?, ?)', [title, imageUrl, description, price]);
  }


  static deleteById(id) {

  }

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE id=?', [id])
  }
};
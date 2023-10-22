const { db } = require('./../database.js');

const Product = require('../models/product.model.js')(db);

module.exports = {
    //TODO move queries to a repository

    findAll: async ({attributes, limit, offset}) => {
        const query ={ attributes, limit, offset};
        const products = await Product.findAll(query);
        return products;
    },
    findOne: async (id) => {
        const product = await Product.findOne({
            where: { product_id: id }
        });
        return product;
    },
    create: async (product) => {
        const newProduct = await Product.create(product);
        return newProduct
    },
    update: async (id, product) => {
        const updatedProduct = await Product.update(product, { where: { product_id: id } });
        return updatedProduct;
    },
    remove: async (id) => {
        await Product.destroy({
            where: { product_id: id },
            rejectOnEmpty: true
        });
    }
}
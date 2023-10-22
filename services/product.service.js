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
            where: { productId: id }
        });
        return product;
    },
    create: async (product) => {
        const newProduct = await Product.create(product);
        return newProduct
    },
    update: async (productId, product) => {
        const updatedProduct = await Product.update(product, { where: { productId: productId } });
        return updatedProduct;
    },
    remove: async (id) => {
        await Product.destroy({
            where: { productId: id },
            rejectOnEmpty: true
        });
    }
}
const { db } = require('../database.js');

const Order = require('../models/order.model.js')(db);
const productService = require('../services/product.service');

module.exports = {
    //TODO move queries to a repository
    findAll: async ({ attributes, limit, offset }) => {
        const query = { attributes, limit, offset };
        const orders = await Order.findAll(query);
        return orders;
    },
    findOne: async (id) => {
        const order = await Order.findOne({
            where: { order_id: id }
        });
        return order;
    },
    create: async (order) => {

        let itemsPrice = 0;
        for (let item of order.items) {
            const productData = await productService.findOne(item.product_id);
            item.product_data = productData;
            item.sub_total = item.quantity * productData.price;
            itemsPrice = itemsPrice + item.sub_total;
        }

        order.items_price = itemsPrice;
        order.shipping_price = Number(process.env.SHIPPING_PRICE);

        order.total_price = order.shipping_price + order.items_price;
        const newOrder = await Order.create(order);
        const result = await Order.findOne({ where: { order_id: newOrder.order_id } });
        return result;
    }
}
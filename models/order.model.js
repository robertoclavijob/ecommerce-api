const { DataTypes } = require("sequelize");

module.exports = (sequelizeInstance) => {
    const Order = sequelizeInstance.define('order', {
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        customer_name: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        credit_card_number: {
            type: DataTypes.INTEGER
        },
        items: {
            type: DataTypes.JSON
        },
        items_price: {
            type: DataTypes.DOUBLE(10, 2),
            allowNull: false,
            default: 0
        },
        shipping_price: {
            type: DataTypes.DOUBLE(10, 2),
            allowNull: false,
            default: 0
        },
        total_price: {
            type: DataTypes.DOUBLE(10, 2),
            allowNull: false,
            default: 0
        },
    }, {
        freezeTableName: true,
        indexes: [
            {
                fields: ['customer_name',]
            },
            {
                fields: ['credit_card_number']
            },
        ]
    });
    return Order;
}

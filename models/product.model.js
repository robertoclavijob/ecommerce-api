const { DataTypes } = require("sequelize");

module.exports = (sequelizeInstance) => {
    const Product = sequelizeInstance.define('product', {
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        brand: {
            type: DataTypes.STRING
        },
        sku: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            default: 0
        }
    }, {
        freezeTableName: true,
        indexes: [
            {
                unique: true,
                fields: ['sku']
            },
        ]
    });
    return Product;
}

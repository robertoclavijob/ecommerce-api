const { DataTypes } = require("sequelize");

//TODO add support for non relational dbs like mongo based on DB_DIALECT

module.exports = (sequelizeInstance) => {
    const Product = sequelizeInstance.define('product', {
        product_id: {
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
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.DOUBLE(10, 2),
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

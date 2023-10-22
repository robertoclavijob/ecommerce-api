# ecommerce-api
This api was created with express generator
## Requirements
Node JS v18.18.2  
MySQL 8
## Steps to start
```
npm install
npm start
```
## Tables
The tables will be auto created since Sequelize sync feature was used
but if ddls look like this
```
CREATE TABLE `order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `credit_card_number` int DEFAULT NULL,
  `items` json DEFAULT NULL,
  `items_price` double(10,2) NOT NULL,
  `shipping_price` double(10,2) NOT NULL,
  `total_price` double(10,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `order_customer_name` (`customer_name`),
  KEY `order_credit_card_number` (`credit_card_number`)
); 

CREATE TABLE `order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `credit_card_number` int DEFAULT NULL,
  `items` json DEFAULT NULL,
  `items_price` double(10,2) NOT NULL,
  `shipping_price` double(10,2) NOT NULL,
  `total_price` double(10,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `order_customer_name` (`customer_name`),
  KEY `order_credit_card_number` (`credit_card_number`)
);
```
## Endpoints
If you are using postman the collection was attached as part of the code

**Product**
POST
```
/products
```
```
{
    "name": "Dish Towel",
    "sku": "KW23 MZQW 39MG Y2Q0 ROSQ DAKZ W98C S9",
    "description": "Basic Industries",
    "price": 728.32
}
```
GET
```
/products?attributes=name&attributes=description&limit=1&offset=0
```
GET BY ID
```
/products/1
```
DELETE
```
/products/1
```
PATCH


**Order**
POST
```
/orders
```
```
{
    "customer_name": "Sandy Cufley",
    "address": "PO Box 12155",
    "items": [ { 
        "product_id": 1,
        "quantity": 2
    },
    { 
        "product_id": 2,
        "quantity": 1
    }]
}
```
GET
```
/orders?attributes=order_id&attributes=total_price&limit=1&offset=0
```

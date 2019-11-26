const Product = require('../database/models/productModel');
const {formatMongoData} = require('../helper/dbHelper');

module.exports.createProduct = async (serviceData) => {
    try{
        let product = new Product({ ...serviceData })
        let result = await product.save();
        return formatMongoData(result);
    } catch (error){
        console.log('Something went wrong: Service: productController', error);
        throw new Error(error);
    }
}

module.exports.getAllProduct = async ({skip = 0, limit = 10 }) => {
    try{
        let products = await Product.find({ }).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(products);
    } catch (error){
        console.log('Something went wrong: Service: productController', error);
        throw new Error(error);
    }
}

    
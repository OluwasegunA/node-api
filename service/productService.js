const Product = require('../database/models/productModel');
const {formatMongoData, chkObjectId} = require('../helper/dbHelper');
const constants = require('../constants/');
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

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

module.exports.getProductById = async ({ id }) => {
    try{
        chkObjectId(id);
        let product = await Product.findById(id);
        if(!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error){
        console.log('Something went wrong: Service: getProductById', error);
        throw new Error(error);
    }
}

module.exports.updateProductById = async ({ id, updateInfo }) => {
    try{
        chkObjectId(id);
        let product = await Product.findOneAndUpdate(
            {_id: id},
            updateInfo,
            { new: true }
            );
        if(!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error){
        console.log('Something went wrong: Service: updateProductById', error);
        throw new Error(error);
    }
}

module.exports.deleteProductById = async ({ id }) => {
    try{
        chkObjectId(id);
        let product = await Product.findByIdAndDelete(id);
        if(!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error){
        console.log('Something went wrong: Service: deleteProductById', error);
        throw new Error(error);
    }
}
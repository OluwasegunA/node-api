const productService = require('../service/productService');
const constants = require('../constants');

module.exports.createProduct = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService;
    } catch (err){
        console.log('Something went wrong: Controller: createProduct', err);
        throw Error ('err');
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}


module.exports.getProductById = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.getProductById(req.params);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_FETCHED;
        response.body = responseFromService;
    } catch (err){
        console.log('Something went wrong: Controller: getProductById', err);
        throw Error ('err');
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}


module.exports.getAllProduct = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.getAllProduct(req.query);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_FETCHED;
        response.body = responseFromService;
    } catch (err){
        console.log('Something went wrong: Controller: getAllProduct', err);
        throw Error ('err');
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}

module.exports.updateProductById = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.updateProductById({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_FETCHED;
        response.body = responseFromService;
    } catch (err){
        console.log('Something went wrong: Controller: updateProductById', err);
        throw Error ('err');
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}

module.exports.deleteProductById = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await productService.deleteProductById(req.params);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_DELETED;
        response.body = responseFromService;
    } catch (err){
        console.log('Something went wrong: Controller: deleteProductById', err);
        throw Error ('err');
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}
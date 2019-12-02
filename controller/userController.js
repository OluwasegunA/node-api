const userService = require('../service/userService');
const constants = require('../constants');

module.exports.createUser = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await userService.createUser(req.body);
        response.status = 200;
        response.message = constants.userMessage.USER_CREATED;
        response.body = responseFromService;
    } catch (err){
        console.log('Something went wrong: Controller: createUser', err);
        throw Error ('err');
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}

module.exports.login = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await userService.login(req.body);
        response.status = 200;
        response.message = constants.userMessage.USER_LOGIN;
        response.body = responseFromService;
    } catch (err){
        console.log('Something went wrong: Controller: login', err);
        throw Error ('err');
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}
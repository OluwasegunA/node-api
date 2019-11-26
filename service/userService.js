const User = require('../database/models/userModel');

module.exports.createUser = async (userData) => {
    try{
        let user = new User({ ...userData })
        let result=  await user.save();
        return result.toObject();
    } catch (error){
        console.log('Something went wrong: Service: userController', error);
        throw new Error(error);
    }
}

    
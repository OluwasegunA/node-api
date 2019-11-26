const Joi = require ('@hapi/joi');

module.exports.createUserSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'ng'] } }).required(),
    password: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    gender: Joi.string().required()
})

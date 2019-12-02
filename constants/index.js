module.exports ={
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully!',
        PRODUCT_FETCHED: 'Product Fetched Successfully!',
        PRODUCT_UPDATED: 'Product Updated Successfully!',
        PRODUCT_DELETED: 'Product Deleted Successfully!',
        PRODUCT_NOT_FOUND: 'Product Id specified not found'
    },
    userMessage: {
        USER_CREATED: 'User Created Successfully!',
        DUPLICATE_USER: 'User already exist',
        USER_NOT_FOUND: 'User does not Exist',
        USER_LOGIN: 'User logged on Sucess',
        INVALID_LOGIN: 'Invalid Password'
    },
    requestValidationMessage: {
        REQUEST_MESSAGE: 'Invalid Fields',
        TOKEN_MISSING: 'Token Missing'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid ID'
    }
}
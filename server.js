const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');

dotenv.config();

const app = express();

//cors
app.use(cors());

//db connectivity
dbConnection();

//request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/product', require('./routes/productRoutes'));

//Creating User API
app.use('/api/user', require('./routes/userRoutes'));

app.get('/', (req, res, next) => {
    res.send('Hello from Node server');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

//error handling middleware
app.use((err,req,res,next) =>{
    console.log(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});
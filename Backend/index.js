const express = require('express');
const dotenv = require('dotenv');
const fileupload = require("express-fileupload");

dotenv.config();

const app = express(); 

const connectDB = require("./config/db.js");
const cloudinaryConnect = require("./config/cloud.js");

const userRoutes = require('./routes/UserRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const fileRoutes = require('./routes/FileRoutes.js');
const CartRoutes = require('./routes/CartRoutes.js');


const errorHandler = require('./middleware/errorMiddleware.js');

connectDB();
cloudinaryConnect();


app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));


app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/carts', CartRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
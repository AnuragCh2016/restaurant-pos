//all imports
import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import connectDB from './db/connect.js';

//importing routes
import orderRoute from './routes/orderRoute.js';
import itemRoute from './routes/itemRoute.js';
import customerRoute from './routes/customerRoute.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//using routes
app.use('/order', orderRoute);
app.use('/item', itemRoute);
app.use('/customer', customerRoute);


app.get('/', (req, res) => {
    res.send('Welcome to Restaurant POS API');
});

//connecting to database
connectDB();

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
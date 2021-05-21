import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './router/userRouter.js';
import product from './data/productData.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
	res.send('API is running....');
});

app.get('/api/products', (req, res) => {
	res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

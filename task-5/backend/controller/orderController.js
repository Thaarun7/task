import asyncHandler from 'express-async-handler';
import Order from '../model/orderModel.js';

const addOrderItems = asyncHandler(async (req, res) => {
	const {
		orderItems,
	} = req.body;

	if (orderItems && orderItems.length === 0) {
		res.status(400);
		throw new Error('No order items');
		return;
	} else {
		const order = new Order({
			orderItems,
			user: req.user._id,
			shippingAddress,
		});

		const createdOrder = await order.save();

		res.status(201).json(createdOrder);
	}
});

export { addOrderItems };

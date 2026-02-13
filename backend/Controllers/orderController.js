const Order = require('../models/orderModels');
const Product = require('../models/productModels');

// CREATE ORDER
exports.createOrder = async (req, res) => {
    try {
        const { userId, productIds } = req.body;

        if (!userId || !productIds || productIds.length === 0) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Calculate total amount from products
        const products = await Product.find({ _id: { $in: productIds } });

        if (products.length !== productIds.length) {
            return res.status(400).json({ message: "Invalid product ID(s)" });
        }

        const totalAmount = products.reduce(
            (sum, product) => sum + product.price,
            0
        );

        const order = await Order.create({
            userId,
            productIds,
            totalAmount
        });

        res.status(201).json(order);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET ORDER BY ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('productIds');

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json(order);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE ORDER
exports.updateOrder = async (req, res) => {
    try {
        const { productIds } = req.body;

        const products = await Product.find({ _id: { $in: productIds } });

        const totalAmount = products.reduce(
            (sum, product) => sum + product.price,
            0
        );

        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { productIds, totalAmount },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json(updatedOrder);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE ORDER
exports.deleteOrder = async (req, res) => {
    try {
        const deleted = await Order.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json({ message: "Order deleted successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

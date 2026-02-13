const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://anirudh67:Anirudh%40123@nodejs.lsqfprh.mongodb.net/meancrud?retryWrites=true&w=majority')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const orderRoutes = require('./routes/orderRoues');
app.use('/api/orders', orderRoutes);

const weatherRoutes = require("./routes/weather");

app.use("/api/weather", weatherRoutes);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

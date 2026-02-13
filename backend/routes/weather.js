const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = "de56e41249f2f47e8a8738bbacd87b20"; // replace with your key

// GET weather by city
router.get("/:city", async (req, res) => {
    try {
        const city = req.params.city;

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        res.json(response.data);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Failed to fetch weather data" });
    }
});

module.exports = router;

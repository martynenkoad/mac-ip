const express = require("express")
const axios = require("axios")

const router = express.Router()

/**
 * @description    Get information about the user's IP-address.
 * @route          GET /api/ip
 * @params         req, res
 */
router.get("/", async (req, res) => {
    try {
        const response = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=0f5c10e9ddde41f7bc62e7f1494d7a18')
        res.status(200).json(response.data)
    } catch (error) {
        res.status(400).json({ error: error.message || error.toString() })
    }
})

module.exports = router
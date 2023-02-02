const express = require("express")
const router = express.Router()

const ApiClient = require("@codelinefi/maclookup")
const apiKey = process.env.API_KEY || "test"

let client = new ApiClient(apiKey)

/**
 * @description    Get information about user's MAC-address.
 * @route          /api/mac/:mac
 * @params         req.params.mac, res
 */
router.get("/:mac", (req, res) => {
    const { mac } = req.params

    client.get(mac, (error, result) => {
        if(error) {
            res.status(400).json({ error: error.message || error.toString() })
        } else {
            res.status(200).json(result)
        }
    })
})

module.exports = router
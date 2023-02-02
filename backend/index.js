require("dotenv").config()
const express = require("express")
const cors = require("cors")
const macRoutes = require("./routes/macRoutes")
const ipRoutes = require("./routes/ipRoutes")

const app = express()
app.use(
    cors({
        origin: "*"
    })
)

app.use("/api/mac", macRoutes)
app.use("/api/ip", ipRoutes)

const port = process.env.PORT || 4440

app.listen(port, () => {
    console.log(`Server listening on port ${port}....`)
})

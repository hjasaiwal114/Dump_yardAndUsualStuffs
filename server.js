const express = require("express");
const app = express()
const PORT = 5000
const connectDB = require("./db");
app.use(express.json())

const server = app.listen(PORT, () => {
    console.log(`Server COnnected to port ${PORT}`)
})
// Handling error
process.on("unhandeledRejection", err => {
    console.log(`An error occured: ${err.message}`)
    server.close(() => process.exist(1))
})

app.listen(PORT, () => console.log(`Server connected to prt ${PORT}`))
connectDB();
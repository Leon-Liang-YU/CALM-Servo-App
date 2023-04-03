const express = require("express")
const app = express()
const cors = require('cors')
const config = require("./config")

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("home", { API_KEY: config.maps_key })
})

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
  })
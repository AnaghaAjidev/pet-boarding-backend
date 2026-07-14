const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://anaghaajidev:Anagha23@ac-agnsoij-shard-00-00.lk3iujt.mongodb.net:27017,ac-agnsoij-shard-00-01.lk3iujt.mongodb.net:27017,ac-agnsoij-shard-00-02.lk3iujt.mongodb.net:27017/pet_boarding_db?ssl=true&replicaSet=atlas-bjgzxl-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected")
})
.catch((error) => {
    console.log(error)
})

const Boarding = mongoose.model("Boardings", new mongoose.Schema(
    {
        booking_id: String,
        pet_name: String,
        pet_type: String,
        breed: String,
        age: String,
        weight: String,
        vaccination_status: String,
        owner_name: String,
        owner_phone: String,
        owner_email: String,
        checkin_date: String,
        checkout_date: String,
        kennel_number: String
    }
))

app.get("/test", (req, res) => {
    res.send("Server Working");
});

app.post("/add_boarding", async (req, res) => {
    await Boarding.create(req.body)
    res.json({
        status: "success"
    })
})

app.post("/view_boarding", async (req, res) => {
    const boardings = await Boarding.find()
    res.json(boardings)

})

app.get("/test", (req, res) => {
    res.send("Pet Boarding Backend Working");
});

app.listen(3000, () => {
    console.log("⭐⭐⭐ PET BOARDING SERVER STARTED ⭐⭐⭐")
})
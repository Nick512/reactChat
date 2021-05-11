// Express Init
const app = require("express")()

//Get routes
const user = "./routes/userRoutes"

// Connect to database
const mongoose = require("mongoose")
mongoose
    .connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Mongo connected"))
    .catch((err) => console.log(err))

// Define API routes
app.use("/api/user", user)

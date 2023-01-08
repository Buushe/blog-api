const mongoose = require("mongoose")

mongoose.connect(process.env.DB)
.then(() => {
    console.log("Connected to the database")
}).catch((err) => {
    console.log("could not connected")
});
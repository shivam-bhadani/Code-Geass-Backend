const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database is connected"))
    .catch((err) => console.log(`Database connection error : ${err}`));
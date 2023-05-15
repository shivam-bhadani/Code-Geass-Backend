const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    score: {type: Number, default: 0},
    solvedProblems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem' }],
    role: { type: String, default: 'user', enum: ['admin', 'user'] }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
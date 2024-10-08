const { default: mongoose } = require("mongoose");

const theatreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        requiredd: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userLLDMarch",
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})

const Theatre = mongoose.model("theatreLLDMarch", theatreSchema)

module.exports = Theatre
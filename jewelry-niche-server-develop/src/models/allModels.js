const { default: mongoose } = require("mongoose");

const Jewelry = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    vendor: String,
    rating: Number
})

const JewelryModel = mongoose.model("jewelery", Jewelry);

const Order = new mongoose.Schema({
    totalBill: Number,
    products: [{ type: mongoose.Schema.ObjectId }],
    mode_of_payment: Number
})

const OrderModel = mongoose.model("order", Order)


const User = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    name: String
})

const UserModel = mongoose.model("user", User)



module.exports = {
    JewelryModel,
    OrderModel,
    UserModel
}
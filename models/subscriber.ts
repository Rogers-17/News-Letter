import mongoose, { model, models } from 'mongoose'

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

const Subscribers = models.Subscribers || model("Subscribers", subscriberSchema);

export default  Subscribers;
import mongoose from 'mongoose'

let isConnected = false;

export const ConnectDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDB is already connected")
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_ATLAS_URL, {
            dbName: "subscriptionDB",
        })

        isConnected = true;

        console.log("MongoDB is connected!")
    } catch(error) {
        console.log(error)
    }
}
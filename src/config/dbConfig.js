import mongoose from 'mongoose'

export const connectDb = async() => {
    try {
const mongoUrl ="mongodb://localhost:27017/ft"
mongoose.set('strictQuery', true)
        const connect = await  mongoose.connect(mongoUrl)
        connect && console.log("mongo Connected")
    } catch (error) {
        console.log(error.message, "from connectDb function")
        
    }
}
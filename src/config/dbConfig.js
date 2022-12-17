import mongoose from 'mongoose'

export const connectDb = async(obj) => {
    try {
const mongoUrl =" mongodb://localhost:27017/ft"
mongoose.set('strictQuery', true)
        const connect = await new mongoose.connect(mongoUrl)
    } catch (error) {
        console.log(error.message, "from connectDb function")
        
    }
}
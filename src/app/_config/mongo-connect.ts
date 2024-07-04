import mongoose from 'mongoose'

const mongoDB = async () => {
   if (mongoose.connections[0].readyState){
      return true
   }

   try {
      await mongoose.connect(process.env.MONGODB_URI as string)
      console.log('db connected')
      return true
   } catch (error) {
      console.log(error)
   }
}

export default mongoDB
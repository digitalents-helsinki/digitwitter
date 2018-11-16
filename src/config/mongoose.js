import mongoose from 'mongoose'

export const initDb = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect('mongodb://localhost:27017/datapeissi')

      resolve()
    } catch (err) {
      if (err instanceof Error) {
        reject(err)
      } else {
        reject(new Error(err))
      }
    }
  })
}

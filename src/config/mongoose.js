import mongoose from 'mongoose'
import { mongo } from '@/constants/'

export const initDb = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect(`${mongo.uri}:${mongo.port}/${mongo.database}`)

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

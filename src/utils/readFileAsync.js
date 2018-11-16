import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

export default promisify(fs.readFile)

import dotenv from 'dotenv'
import { server } from './server'


dotenv.config();

const { _PORT } = process.env;
server.listen(_PORT, () => console.log(`
  Server running at ${_PORT}
`))
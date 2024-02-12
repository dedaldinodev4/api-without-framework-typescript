import dotenv from 'dotenv'
import morgan from 'morgan'
import { server } from './server'


dotenv.config();
morgan('dev');
const { _PORT } = process.env;
server.listen(_PORT, () => console.log(`
  Server running at ${_PORT}
`))
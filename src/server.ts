import http from 'http';
import { handleRequest } from './helpers/handleRequest';

const server = http.createServer(handleRequest);
export { server }
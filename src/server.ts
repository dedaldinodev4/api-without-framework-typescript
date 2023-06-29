import http from 'http';
import { DEFAULT_HEADER } from './utils';
import { routes } from './routes';
import { handlerError } from './errors/handlerError';

const handler = (request, response) => {
  const { url, method } = request
  const [first, route, id] = url.split('/')
  request.queryString = { id: isNaN(id) ? id : String(id) }

  const key = `${route}:${method.toLowerCase()}`

  response.writeHead(200, DEFAULT_HEADER);
  const chosen = routes[key] || routes.default;
  
  return chosen(request, response)?.catch(handlerError(response))
}


export const server = http.createServer(handler);
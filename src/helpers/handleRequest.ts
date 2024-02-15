import routes from "../routes";


export const handleRequest = (request, response) => {
    const { url, method } = request;
    const [first, route, id ] = url.split('/')
    request.queryString = { id: id };

    const key = `${route}:${method.toLowerCase()}`
    
    const routeHandler = routes[key] || routes.default
    console.log(first, route, id, key, routeHandler)

    if (routeHandler) {
        return routeHandler(request, response);
    } else {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: 'Route not found' }));
    }
}
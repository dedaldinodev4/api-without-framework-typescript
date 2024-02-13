import routes from "../routes";


export const handleRequest = (req, res) => {
    const { url, method } = req;
    const routeHandler = routes[url || '']?.[method || ''];

    if (routeHandler) {
        routeHandler(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
}
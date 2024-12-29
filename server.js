const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();

// Bind the router db to the app
server.db = router.db;

// Use the middlewares and the auth module
server.use(middlewares);
server.use(auth);
server.use(router);

// Start the server on port 9000
server.listen(9000, () => {
  console.log('JSON Server with auth is running on http://localhost:9000');
});

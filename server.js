//Install express server
const express = require('express');
var app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
var port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port: " + port);
});
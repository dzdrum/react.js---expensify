//require is the node way of importing something
const path = require('path');
const express = require('express');
//create an express application
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

//tell the application to use the public directory to serve up all static assets
app.use(express.static(publicPath));

//if something that the user requested on the app isnt in the public folder
//then give them back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

//start up on port 3000 for the development server
app.listen(3000, () => {
  console.log('server is up!');
});

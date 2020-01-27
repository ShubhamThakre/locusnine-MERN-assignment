const express = require('express');
const bodyParser  =   require("body-parser");
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes/routes');
const dbConfig = require('./database/config');



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))      
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
mongoose.connect(dbConfig.mongoURL, {useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => {console.log("Successfully connected to the database")})
  .catch(err => {console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

//Defining the routs Path( all routes are define in this file)
app.use('/api', routes);

// create a GET route
app.get('/get', (req, res) => {
  res.send({ express: 'YOUR BACKEND RESPONSE IS CONNECTED TO REACT' });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
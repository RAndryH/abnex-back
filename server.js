const	express = require('express'),
		app = express(),
		path = require('path'),
		bodyParser = require('body-parser'),
        cors = require('cors'),
		env = require('dotenv');
        
app.use(cors());

// Body parses express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Path
app.use(express.static(path.join(__dirname, '')));
require('dotenv').config({path: __dirname + '/.env'});
PORT = process.env['SERVER_PORT'] || 3200;

// Routes
const carsRouter = require('./routes/CarsRoute');
app.use('/', carsRouter);

// Port listner
app.listen(PORT, () => {
    console.log("Connect with port " + PORT);
});
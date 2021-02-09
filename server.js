// Import npm packages
const express = require('express');
const morgan = require('morgan');
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const routes = require('./routes/user');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api/user', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
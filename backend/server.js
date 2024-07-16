const dotenv = require('dotenv').config();

const mongoose = require('mongoose');

const app = require('./index');

const DB = process.env.DB_URL;

const port = process.env.PORT || 3000;

mongoose.connect(DB).then(() => {
    console.log('DB connected succesfully');
});

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});


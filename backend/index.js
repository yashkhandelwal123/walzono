require('dotenv').config({path : "./.env"});
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require('./config/db')();
const cookieParser = require('cookie-parser');
const cors = require('cors');


app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin : "http://localhost:5173",
    credentials : true
}
app.use(cors(corsOptions));


// router mounting...
app.use('/api/user', require('./routes/user.route'));
// app.use('/api/user', require('./routes/user.route'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
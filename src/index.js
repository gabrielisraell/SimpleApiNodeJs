const port = process.env.PORT || 8000;
const cors = require('cors');

const app = require('./app');


const mongoose = require('mongoose');


require('dotenv').config()


const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});


require('./database/connection')

const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.i4cpdut.mongodb.net/duramais`);

    const connection  = mongoose.connection;

    connection.on("error", () => {
        console.error("error to connect to mongodbb!")
    });

    connection.on("open", () => {
        console.log("connect to bancoDados successful")
    })
}

connect();

module.exports = mongoose;


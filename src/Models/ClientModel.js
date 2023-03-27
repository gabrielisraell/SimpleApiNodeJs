const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClientSchema = new Schema({ 
    id: ObjectId,
    client: String,
    phone: Number
 });

 const ClientModel = mongoose.model('clients', ClientSchema);

module.exports = ClientModel;

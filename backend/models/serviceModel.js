const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name:{type:String, required:[true, "A name for the service is required"], unique:[true, "The name already exists"]},
    description:{type: String},
    time:{type: Number},
    price:{type: Number}
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    _id : {
        type: 'number',
        required: true,
    },
    name: {
        type: 'string',
        required: true,
    },
    url: {
        type: 'string',
        required: true,
    }
},{_id:false});

const Company = mongoose.model('Company', companySchema);
module.exports = mongoose.models.Company || Company;
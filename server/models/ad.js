const mongoose = require('mongoose');

const adSchema = mongoose.Schema({
    id : {
        type: 'number',
        required: true,
    },
    company : {
        type: mongoose.Schema.Types.Number,
        ref : 'Company'
    },
    primaryText: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
    },
    headline: {
        type: 'string',
    },
    cta: {
        type: 'string',
    },
    imgUrl: {
        type: 'string',
    },
});

const Ad = mongoose.model('Ad', adSchema);
module.exports = mongoose.models.Ad || Ad;
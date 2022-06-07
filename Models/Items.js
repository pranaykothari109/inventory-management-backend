const moongoose = require('mongoose');

const itemSchema = moongoose.Schema({
    name: 'string',
    quantity: { type: 'number', required: true},
    // date: 'date',
    category: {type:'string', required: true},
})


module.exports.itemModal = moongoose.model('products', itemSchema);
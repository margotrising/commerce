const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
 
var connection = mongoose.createConnection("mongodb://localhost/CommerceSchema");
 
autoIncrement.initialize(connection);



const CommerceSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Must contain Name'], minlength:[3, 'Name must be at least 3 characters long']},
    qty: {type: Number, required: [true, 'Must contain Quantity'], min: [0, 'Quantity must be at least 0']},
    price: {type: Number, required: [true, 'Must contain Price'], min: [0, 'Price must be at least $0']}
},
{timestamps: true}
)
CommerceSchema.plugin(autoIncrement.plugin,{
    model: 'Commerce',
    startAt: 1
});
mongoose.model('Commerce', CommerceSchema);
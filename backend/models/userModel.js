/** External Library Imports **/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/** Internal Dependencies **/

/** Source Code **/
const userSchema = new  mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String, 
            required: true
        },
        stock_image_posts: [{
            type: Schema.Types.ObjectId,
            ref: 'StockImage'
        }]
    },
    { timestamps: true }
);

/** Module Exports **/
module.exports = mongoose.model('User', userSchema);

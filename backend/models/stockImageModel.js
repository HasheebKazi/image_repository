/** External Library Imports **/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Internal Dependencies **/

/** Source Code **/
const stockImageSchema = new  mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String, 
            required: true
        },
        description: {
            type: String,
            required: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    { timestamps: true }
);

/** Module Exports **/
module.exports = mongoose.model('StockImage', stockImageSchema);

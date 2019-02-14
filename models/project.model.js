var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
    //_id: {type: mongoose.Schema.Types.ObjectId},
    _id: {type: String},
    client: {type: String, required: true},
    product: {type: String, required: true},
    url: {type: String}
});

// Export model
module.exports = mongoose.model('Project', ProjectSchema);
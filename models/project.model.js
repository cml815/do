var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
    _id: {type: String, required: true},
    client: {type: String, required: true},
    product: {type: String, required: true},
    url: {type: String}
});

// Export model
module.exports = mongoose.model('Project', ProjectSchema);
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
    client: {type: String, required: true},
    product: {type: String, required: true},
    tags: [{type: String, required: false}],
    url: {type: String}
});

// export model

module.exports = mongoose.model('Project', ProjectSchema);
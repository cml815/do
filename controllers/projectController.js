var Project = require('../models/project');

// List all projects
exports.project_list = function(req, res) {
    res.send('NOT READY: Project list');
};

// Display detail for specific project
exports.project_detail = function(req, res) {
    res.send('NOT READY: Project detail' + req.params.id);
};

//Display project create form on GET
exports.project_create_get = function(req, res) {
    res.send('NOT READY: project create GET');
};

// Create project on POST
exports.project_create_post = function(req, res) {
    res.send('NOT READY: project create post');
};

// Display project delete form on GET
exports.project_delete_get = function(req, res) {
    res.send('NOT READY: project delete get');
};

// Handle project delete on POST
exports.project_delete_post = function(req, res) {
    res.send('Not ready: project delete on post');
};

// Display project update on GET
exports.project_update_get = function(req, res) {
    res.send("Not ready: project update get");
};

//Handle project update on POST
exports.project_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED:  Project update POST');
}





const Project = require('../models/project.model');

/// Projects 

//Simple CRUD - no validation or sanitation
exports.test = function(req, res) {
    res.send('Ping from the Test Project controller');
};

/* List all projects
exports.index = function(req, res, next) {   
    res.send('NOT IMPLEMENTED: Site Home Page');
}

*/

// Index page: List all projects
exports.index = function(req, res, next) {
    Project.find({}, '_id client product')
        .populate('client')
        .exec(function (err, index) {
            if(err) {return next(err); }
            //if successful, render
        res.render('index', {title: 'Projects', index});
        });

}

// Create and save project
exports.project_create = function (req, res, next) {
    let project = new Project(
        {
            client: req.body.client,
            product: req.body.product,
            url: req.body.url
        }
    );

    project.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Project Created successfully')
    })
};

// Read inventory function
exports.project_details = function (req, res, next) {
    Project.findById(req.params.id, function (err, project) {
        if (err) {
            return next(err);
        }
        res.send(project);
    })
};

// Update

exports.project_update = function (req, res) {
    Project.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, project) {
        if (err) return next(err);
        res.send('Project udpated.');
    });
};

// Delete

exports.project_delete = function (req, res) {
    Project.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


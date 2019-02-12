const Project = require('../models/project.model');
var async = require('async');

// const { body, validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');

/// Projects 

// Simple CRUD - no validation or sanitation
exports.test = function(req, res) {
    res.send('Ping from the Test Project controller');
};

/* 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
  });

  */

exports.index = function(req, res, next) {
    res.render('index', { title: 'Projects'}); 
};


 

/* List all projects
exports.index = (function(req, res, next) {
    Project.find(function(err, projects) {
        if (err)
            res.send(err);

        // res.json(projects);
        res.render('index', {title: 'Projects'});
    });
});

*/

/*

    exports.index = function(req, res, next) {
    Project.find({}, '_id client product url')
        .populate('project')
        .exec(function (err, index) {
            if(err) {return next(err); }
            //if successful, render
        res.render('index', {title: 'Projects', index});
        });

}

*/

// List all Projects

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

// Display list of all Projects.

exports.project_list = function(req, res, next) {
    Project.find({}, 'client product')
      .populate('project')
      .exec(function (err, list_projects) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('project_list', { title: 'Project List', project_list: list_projects });
      });
      
  };


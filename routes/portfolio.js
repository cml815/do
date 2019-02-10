const express = require('express');
const router = express.Router();

const project_controller = require('../controllers/project.controller');

/// Project ROUTES ///

// a simple test url to check that all of our files are communicating correctly.
// router.get('/test', project_controller.test);

// Get portfolio home page
// router.get('/project', project_controller.index);

// GET request for creating Project. NOTE This must come before route for id (i.e. display project).
router.get('/project/create', project_controller.project_create_get);

// POST request for creating proj.
router.post('/project/create', project_controller.project_create_post);

// GET request to delete project.
router.get('/project/:id/delete', project_controller.project_delete_get);

// POST request to delete Author.
router.post('/project/:id/delete', project_controller.project_delete_post);

// GET request to update Author.
router.get('/project/:id/update', project_controller.project_update_get);

// POST request to update Author.
router.post('/project/:id/update', project_controller.project_update_post);

// GET request for one Author.
router.get('/project/:id', project_controller.project_detail);

// GET request for list of all Authors.
router.get('/projects', project_controller.project_list);

/* router.get('/', function(req, res, next) {
    res.render('portfolio', { title: 'Portfolio - Fuck Me' });
  });

  router.post( '/', function (req, res, next) {

  });

  */

module.exports = router;
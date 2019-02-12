var express = require('express');
var router = express.Router();

// Require the controllers 
const project_controller = require('../controllers/project.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', project_controller.test);

router.get('/', project_controller.index);

// Create a new project
router.post('/create', project_controller.project_create);

// Read an existing project
router.get('/:id', project_controller.project_details);

// Update portfolio
router.put('/:id/update', project_controller.project_update);

// Delete project
router.delete('/:id/delete', project_controller.project_delete);

// GET request for list of all Book.
router.get('/projects', project_controller.project_list);

module.exports = router;

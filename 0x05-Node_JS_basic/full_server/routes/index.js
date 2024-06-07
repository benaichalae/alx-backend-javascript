const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

/**
 * Binds the routes to the appropriate handler in the
 * given Express application.
 * @param {Object} app The Express application.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

module.exports = mapRoutes;

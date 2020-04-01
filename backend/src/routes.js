const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const OrganizationController = require('./controller/OrganizationController');
const SessiontionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessiontionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/organization', OrganizationController.index);

module.exports = routes;

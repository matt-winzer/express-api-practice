var express = require('express');
var router = express.Router();
const knex = require('../db/connection');

router.get('/', (request, response, next) => {
  // Query the database
  // Get relevant data
  // Send data back to client as JSON

  knex('balloon')
    .then(balloons => {
      response.json(balloons)
    })
});

router.get('/:id', (request, response, next) => {
  const id = request.params.id

  knex('balloon')
    .select('*')
    .where('id', id)
    .then(balloons => {
      response.json(balloons[0])
    })
})

module.exports = router;

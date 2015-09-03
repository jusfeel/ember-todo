module.exports = function(app) {
  var express = require('express');
  var todosRouter = express.Router();

  todosRouter.get('/', function(req, res) {
    res.send({
      'todos': [
                {
										id: 1,
										title: "Complete Ember.js Tutorial",
										isCompleted: false
								},
								{
										id: 2,
										title: "Checkout some more ember stuff",
										isCompleted: true
								},
								{
										id: 3,
										title: "Solve world hunger (with Ember)",
										isCompleted: false
								}
               ]
    });
  });

  todosRouter.post('/', function(req, res) {
    console.log("here?");
    console.log("############" + req.body);
    console.log(req);
    console.log(req.body);
    var body     = req.body;
    body.todo.id = Math.round(Math.random() * 100);
   
    res.send(body);
    //res.status(201).end();
  });

  todosRouter.get('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.put('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/todos', require('body-parser').json(), todosRouter);
};

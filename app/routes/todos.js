import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('todo');
  },
    actions: {
        createTodo: function(newTitle) {
            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: newTitle,
                isCompleted: false
            });

            // Clear the "New Todo" text field
            //this.controllerFor('todos').set('newTitle', '');
            console.log("saving");
            // Save the new mode
            var self = this;

						function transitionToTodos() {
							self.transitionToRoute('todos');
						}

						function failure(reason) {
							// handle the error
						}

						todo.save().then(transitionToTodos).catch(failure);
        },
        acceptChanges: function(todo) {
            if (Ember.isEmpty(todo.get('title'))) {
                this.send('deleteTodo', todo);
            } else {
                todo.save();
            }
        },
        deleteTodo: function(todo) {
            todo.deleteRecord();
            todo.save();
        }
    }  
});

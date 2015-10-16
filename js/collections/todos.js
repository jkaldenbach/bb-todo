var app = app || {};

var TodoList = Backbone.Collection.extend({
  model: app.Todo,

  localStorage: new Backbone.LocalStorage('todos-backbone'),

  getCompletedTodos: function() {
    return this.filter(function(todo) {
      return todo.get('completed');
    });
  },

  getRemainingTodos: function() {
    return this.without.apply(this, this.getCompletedTodos());
  },

  getNextPosition: function() {
    if (!this.length) return 1;

    return this.last().get('position') + 1;
  },

  getPosition: function(todo) {
    return todo.get('position');
  }
});

app.Todos = new TodoList();

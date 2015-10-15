var app = app || {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  toggleDone: function() {
    var todo = {
      title: this.get('title') + '*',
      completed: !this.get('completed')
    };
    this.save(todo);
  }
})

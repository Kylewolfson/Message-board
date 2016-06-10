import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestion() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      var question = this.get('question');
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    }
  }
});

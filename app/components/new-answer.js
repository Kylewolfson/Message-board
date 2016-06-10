import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newAnswer() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        question: this.get('question')
      };
    this.sendAction('newAnswer', params);
    }
  }
});

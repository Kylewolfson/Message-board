import Ember from 'ember';

export default Ember.Route.extend({
  trackQuestion: Ember.inject.service(),
  
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    newAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question-detail', params.question);
    },
    addTrackedQuestion(question) {
      this.get('trackQuestion').add(question);
    }
  }
});

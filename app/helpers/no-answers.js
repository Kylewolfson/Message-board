import Ember from 'ember';

export function noAnswers(params/*, hash*/) {
  var question = params[0];

  if (question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-alert"></span>');
  } else if (question.get('answers').get('length') > 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(noAnswers);

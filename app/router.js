import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question-detail', {path: '/question-detail/:question_id'});
});

export default Router;

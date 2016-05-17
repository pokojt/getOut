import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile');
  this.route('event-detail', {path: '/event-detail/:event_id'});
  this.route('filter-search');
});

export default Router;

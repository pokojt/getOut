import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  actions: {
    showNav: function() {
      $(".navigation").toggle('hidden');
    }
  }
});

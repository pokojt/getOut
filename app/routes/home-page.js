import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('event');
  },
  actions: {
    showNav: function() {
      $(".navigation").toggle('hidden');
    }
  }
});

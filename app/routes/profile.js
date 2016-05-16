import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('event');
  },
  actions: {
   saveEvent(formInputs) {
     var newEvent = this.store.createRecord('event', formInputs);
     newEvent.save();
     this.transitionTo('profile');
   }
  }
});

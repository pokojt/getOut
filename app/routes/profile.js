import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user-event');
  },
  actions: {
   saveEvent(formInputs) {
     var newEvent = this.store.createRecord('user-event', formInputs);
     newEvent.save();
     this.transitionTo('profile');
   }
  }
});

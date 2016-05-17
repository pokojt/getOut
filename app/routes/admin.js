import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('admin-event');
  },
  actions: {
   saveEvent(formInputs) {
     var newEvent = this.store.createRecord('admin-event', formInputs);
     newEvent.save();
     this.transitionTo('admin');
   }
  }
});

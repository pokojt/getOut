import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('event', params.event_id);
  },
  actions: {
    editEvent(event, formInputs) {
      Object.keys(formInputs).forEach(function(key) {
        if (formInputs[key]!==undefined) {
          event.set(key, formInputs[key]);
        }
      });
      event.save();
      this.transitionTo('event-detail', params.event_id);
    },
    deleteEvent(model) {
      if(confirm("Are you sure you want to delete this event?")) {
        model.destroyRecord();
        this.transitionTo('profile');
      }
    }
  }
});

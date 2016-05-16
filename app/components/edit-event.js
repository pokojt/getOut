import Ember from 'ember';

export default Ember.Component.extend({
  editFormShowing: false,
  actions: {
    toggleEdit() {
      this.toggleProperty('editFormShowing');
    },
    editEvent(event) {
      var formInputs = {
        eventName: this.get('eventName'),
        date: this.get('date'),
        time: this.get('time'),
        location: this.get('location'),
        image: this.get('image'),
        description: this.get('description'),
        price: this.get('price'),
        type: this.get('type'),
      };
      this.toggleProperty('editFormShowing');
      this.sendAction('editEvent', event, formInputs);
    }
  }
});

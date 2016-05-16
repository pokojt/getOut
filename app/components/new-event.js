import Ember from 'ember';

export default Ember.Component.extend({
  eventFormShowing: false,
  actions: {
    toggleDetail() {
      this.toggleProperty('eventFormShowing');
    },
    saveEvent() {
      var formInputs = {
        eventName: this.get('eventName') ? this.get('eventName'): "",
        date: this.get('date') ? this.get('date'): "",
        time: this.get('time') ? this.get('time'): "",
        location: this.get('location') ? this.get('location'): "",
        image: this.get('image') ? this.get('image'): "",
        description: this.get('description') ? this.get('description'): "",
        price: this.get('price') ? this.get('price'): "",
        type: this.get('type') ? this.get('type'): "",
      };
      this.toggleProperty('eventFormShowing');
      this.set('eventName', "");
      this.set('date', "");
      this.set('time', "");
      this.set('location', "");
      this.set('image', "");
      this.set('description', "");
      this.set('price', "");
      this.set('type', "");
      this.sendAction('saveEvent', formInputs);
    }
  }
});

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
        friend1: this.get('friend1') ? this.get('friend1'):"",
        friend2: this.get('friend2') ? this.get('friend2'):"",
        friend3: this.get('friend3') ? this.get('friend3'):"",
        friend4: this.get('friend4') ? this.get('friend4'):"",
        friend5: this.get('friend5') ? this.get('friend5'):"",
        hostedBy: this.get('hostedBy') ? this.get('hostedBy'):"",
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
      this.set('friend1', "");
      this.set('friend2', "");
      this.set('friend3', "");
      this.set('friend4', "");
      this.set('friend5', "");
      this.set('hostedBy', "");
      this.sendAction('saveEvent', formInputs);
    }
  }
});

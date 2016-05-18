import Ember from 'ember';

export function wildEvent(params) {
  var event = params[0];
  if (event.type === "Wild") {
    return event;
  }
}

export default Ember.Helper.helper(wildEvent);

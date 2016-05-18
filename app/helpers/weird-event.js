import Ember from 'ember';

export function weirdEvent(params) {
  var event = params[0];
  if (event.type === "Weird") {
    return event;
  }
  return params;
}

export default Ember.Helper.helper(weirdEvent);

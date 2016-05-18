import Ember from 'ember';

export function urbanEvent(params) {
  var event = params[0];
  if (event.type === "Urban") {
    return event;
  }
  return params;
}

export default Ember.Helper.helper(urbanEvent);

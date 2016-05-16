import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  events: DS.hasMany('user-event', {async: true})
});

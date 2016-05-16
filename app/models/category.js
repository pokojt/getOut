import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  events: DS.hasMany('user-event', {async: true})
});

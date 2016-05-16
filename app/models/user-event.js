import DS from 'ember-data';

export default DS.Model.extend({
  eventName: DS.attr(),
  date: DS.attr('date'),
  time: DS.attr('time'),
  location: DS.attr(),
  image: DS.attr(),
  // category: DS.hasMany('category', {async:true}),
  description: DS.attr(),
  price: DS.attr(),
  urban: DS.attr('boolean', {defaultValue: true}),
  wild: DS.attr('boolean', {defaultValue: true}),
  // comments: DS.hasMany('comment'),
  // user: DS.belongsTo('user')
});

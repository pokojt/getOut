import DS from 'ember-data';

export default DS.Model.extend({
  eventName: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  // category: DS.hasMany('category', {async:true}),
  description: DS.attr(),
  price: DS.attr(),
  type: DS.attr(),
  // urban: DS.attr('boolean', {defaultValue: false}),
  // wild: DS.attr('boolean', {defaultValue: false}),
  // comments: DS.hasMany('comment'),
  // user: DS.belongsTo('user')
});

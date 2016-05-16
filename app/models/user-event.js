import Model from 'ember-data/model';

export default Model.extend({
  eventName: DS.attr(),
  date: DS.attr('date'),
  time: DS.attr('time'),
  location: DS.attr(),
  image: DS.attr(),
  category: DS.hasMany('category', {async:true}),
  description: DS.attr(),
  price: DS.attr(),
  // comments: DS.hasMany('comment'),
  // user: DS.belongsTo('user')
});

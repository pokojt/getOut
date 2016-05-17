import Model from 'ember-data/model';

export default Model.extend({
  eventName: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  type: DS.attr(),
  friend1: DS.attr(),
  friend2: DS.attr(),
  friend3:DS.attr(),
  friend4: DS.attr(),
  friend5: DS.attr(),
  hostedBy: DS.attr(),
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash ({
      yourEvents: this.store.findAll('event'),
      friendEvents: this.store.findAll('admin-event'),
    });
  },
  actions: {
    showNav: function() {
      $(".navigation").toggle('hidden');
    }
  }
});


// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model() {
//     return this.store.findAll('event');
//   },
//   actions: {
//     showNav: function() {
//       $(".navigation").toggle('hidden');
//     }
//   }
// });

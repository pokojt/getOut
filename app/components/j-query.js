import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
    actions: {
      friendsPressed: function() {
        $(".friendEvents").fadeIn();
        $(".yourEvents").fadeOut();
      },
      yoursPressed: function() {
        $(".friendEvents").fadeOut();
        $(".yourEvents").removeClass("hidden");
        $(".yourEvents").fadeIn();
      }
    }
});

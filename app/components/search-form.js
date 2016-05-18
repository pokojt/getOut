
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  formShow: true,
  actions: {
    selectUrban: function() {
      $(".getUrban").addClass('selected');
      $(".urbanEvents").removeClass('hidden');
      $(".wildEvents").addClass('hidden');
      $(".weirdEvents").addClass('hidden');
      $('html, body').animate({
        scrollTop: $(".filterSearchForm").offset().top +600
      }, 1000);
    },
    selectWild: function() {
      $(".getWild").addClass('selected');
      $(".wildEvents").removeClass('hidden');
      $(".urbanEvents").addClass('hidden');
      $(".weirdEvents").addClass('hidden');
      $('html, body').animate({
        scrollTop: $(".filterSearchForm").offset().top +600
      }, 1000);
    },
    selectWeird: function() {
      $(".getWeird").addClass('selected');
      $(".weirdEvents").removeClass('hidden');
      $(".urbanEvents").addClass('hidden');
      $(".wildEvents").addClass('hidden');
      $('html, body').animate({
        scrollTop: $(".filterSearchForm").offset().top +600
      }, 1000);
    },
    scroll2: function() {
      $('html, body').animate({
        scrollTop: $(".filterSearchForm").offset().top +1400
      }, 1000);
    },
    search: function() {
      this.set('formShow', false);
      $(".results").removeClass('hidden');
    },
    tryAgain: function() {
      this.set('formShow', true);
      $(".results").addClass('hidden');
      $("div").removeClass('selected');
    }
  }
});

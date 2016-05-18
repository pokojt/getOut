
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  formShow: true,
  actions: {
    selectUrban: function() {
      $(".getUrban").addClass('selected');
      $('html, body').animate({
        scrollTop: $(".filterSearchForm").offset().top +700
      }, 1000);
    },
    selectWild: function() {
      $(".getWild").addClass('selected');
      $('html, body').animate({
        scrollTop: $(".filterSearchForm").offset().top +700
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
      // if (".getUrban").hasClass('selected'){
      //   $(".urbanEvents").removeClass('hidden');
      // } else if (
      // }
    },
    tryAgain: function() {
      this.set('formShow', true);
      $(".results").addClass('hidden');
      $("div").removeClass('selected');
    }
  }
});

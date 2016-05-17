
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  formShow: true,
  actions: {
    scroll: function() {
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
      var filteredSearch = {
        type: this.get('type'),
        price: this.get('price'),
      };

      this.set('formShow', false);
      console.log(filteredSearch.type, filteredSearch.price);
      $(".results").removeClass('hidden');
    },
    tryAgain: function() {
      this.set('formShow', true);
      $(".results").addClass('hidden');
    }
  }
});

export default function(){
  this.transition(
    this.fromRoute('home-page'),
    this.toRoute('filter-search'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('home-page'),
    this.toRoute('profile'),
    this.use('toDown'),
    this.reverse('toUp')
  );
  this.transition(
    this.fromRoute('filter-search'),
    this.toRoute('search-results'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.hasClass('edit'),
    this.toValue(true),
    this.use('crossFade', 500),
    this.reverse('toLeft', 500)
  );
  this.transition(
    this.hasClass('new'),
    this.toValue(true),
    this.use('crossFade', 500),
    this.reverse('toLeft', 500)
  );
}

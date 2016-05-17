export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('filter-search'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('profile'),
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

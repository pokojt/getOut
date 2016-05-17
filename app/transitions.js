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
};

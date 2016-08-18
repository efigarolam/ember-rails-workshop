import Ember from 'ember';

export default Ember.Controller.extend({
  isExpanded: true,

  actions: {
    toggleImage() {
      this.toggleProperty('isExpanded');
    }
  }
});

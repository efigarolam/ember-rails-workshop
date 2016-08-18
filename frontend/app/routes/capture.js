import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('pokemon');
  },

  actions: {
    willTransition() {
      var model = this.modelFor('capture');

      if(model.get('isNew')) {
        model.deleteRecord();
      }
    }
  }
});

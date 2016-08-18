import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    capture(pokemon) {
      this.sendAction('save', pokemon);
    }
  }
});

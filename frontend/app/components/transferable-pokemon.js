import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  actions: {
    transfer(pokemon) {
      pokemon.destroyRecord();
    }
  }
});

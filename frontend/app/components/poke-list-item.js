import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showPokemon(pokemonId) {
      this.sendAction('show', pokemonId);
    }
  }
});

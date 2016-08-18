import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('pokemon');
  },

  actions: {
    onShowPokemon(pokemonId) {
      this.transitionTo('pokemon', pokemonId);
    }
  }
});

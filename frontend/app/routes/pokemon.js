import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').peekRecord('pokemon', params.pokemon_id);
  },

  actions: {
    onSave(pokemon) {
      var self = this;

      pokemon.save().then(function() {
        self.transitionTo('index');
      });
    }
  }
});

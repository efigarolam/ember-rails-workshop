import Ember from 'ember';

export default Ember.Controller.extend({
  sortedPokemons: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['combatPower:desc'],

  actions: {
    sort() {
      this.set('sortDefinition', ['combatPower:asc']);
    }
  }
});

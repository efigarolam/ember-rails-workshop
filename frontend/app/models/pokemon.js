import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  information: DS.attr(),
  imageUrl: DS.attr(),
  combatPower: DS.attr()
});

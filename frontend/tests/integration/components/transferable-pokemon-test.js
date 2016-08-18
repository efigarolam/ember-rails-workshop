import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('transferable-pokemon', 'Integration | Component | transferable pokemon', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{transferable-pokemon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#transferable-pokemon}}
      template block text
    {{/transferable-pokemon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

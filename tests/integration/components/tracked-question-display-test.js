import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tracked-question-display', 'Integration | Component | tracked question display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tracked-question-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tracked-question-display}}
      template block text
    {{/tracked-question-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

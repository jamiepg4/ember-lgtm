/* globals require */
import LGTM from 'lgtm';
import { module, test } from 'qunit';

module('Unit | Vendor | lgtm shim');

test('can import lgtm', function(assert) {
  assert.equal(LGTM, window.LGTM);
});

test('can require lgtm', function(assert) {
  assert.ok(require('lgtm'));
  assert.ok(require('lgtm').default);
  assert.equal(require('lgtm').default, window.LGTM);
});

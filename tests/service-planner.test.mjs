import assert from 'node:assert/strict';
import test from 'node:test';
const { buildServicePlan, needs, services, servicePlanFromParams, servicePlanHref, servicePlanSummary } = await import('../src/lib/service-planner.ts');

test('all 255 need combinations retain every selection and round-trip into booking', () => {
  for (let mask = 1; mask < 256; mask++) {
    const selected = needs.filter((_, index) => mask & (1 << index));
    const plan = buildServicePlan({ needs: selected.map(item => item.id), business: 'shop', stage: 'ready', platform: 'claude', channels: ['facebook', 'instagram'] });
    assert.ok(plan);
    assert.deepEqual(plan.needs, selected);
    assert.deepEqual(new Set(plan.serviceIds), new Set(selected.map(item => item.service)));
    if (selected.some(item => item.service === 'business-os')) assert.equal(plan.primary, 'business-os');
    const link = new URL(servicePlanHref(plan), 'https://example.test');
    assert.equal(link.pathname, '/book');
    assert.deepEqual(servicePlanFromParams(link.searchParams), plan);
    const summary = servicePlanSummary(plan);
    for (const item of selected) assert.ok(summary.includes(item.name));
    for (const id of plan.serviceIds) assert.ok(summary.includes(services[id].name));
    assert.ok(summary.length < 2000, 'Plan fits the enquiry field');
  }
});

test('primary service follows selection counts with deterministic ties', () => {
  assert.equal(buildServicePlan({ needs: ['content', 'context', 'admin'] }).primary, 'assistant');
  assert.equal(buildServicePlan({ needs: ['enquiries', 'meta-content', 'content'] }).primary, 'meta');
  assert.equal(buildServicePlan({ needs: ['enquiries', 'content', 'admin'] }).primary, 'automation');
  assert.equal(buildServicePlan({ needs: ['content', 'context', 'connect'] }).primary, 'business-os');
});

test('untrusted URLs cannot inject free text, services or duplicate selections', () => {
  const plan = servicePlanFromParams(new URLSearchParams('needs=admin,admin,unknown&business=malicious&platform=javascript:alert(1)&channels=evil&stage=bad&message=private&name=Person'));
  assert.deepEqual(plan.needs.map(item => item.id), ['admin']);
  assert.equal(plan.business.id, 'unspecified');
  assert.equal(plan.stage.id, 'exploring');
  assert.equal(plan.platform, null);
  assert.deepEqual(plan.channels, []);
  assert.equal(servicePlanHref(plan), '/book?needs=admin&stage=exploring');
  assert.equal(servicePlanFromParams(new URLSearchParams('needs=unknown')), null);
  assert.equal(servicePlanFromParams(new URLSearchParams('package=starter')), null);
  assert.equal(buildServicePlan({ needs: [] }), null);
});

test('irrelevant optional fields are removed and edit links retain valid choices', () => {
  const plan = buildServicePlan({ needs: ['content'], platform: 'gemini', channels: ['facebook'] });
  assert.equal(plan.platform.id, 'gemini');
  assert.deepEqual(plan.channels, []);
  const link = new URL(servicePlanHref(plan, '/service-planner'), 'https://example.test');
  assert.equal(link.pathname, '/service-planner');
  assert.deepEqual(servicePlanFromParams(link.searchParams), plan);
});

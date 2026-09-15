import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';

// DOM-level tests: these exercise the real React components, not browser layout.
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'https://example.test/' });
Object.assign(globalThis, {
  window: dom.window, self: dom.window, document: dom.window.document, HTMLElement: dom.window.HTMLElement,
  FormData: dom.window.FormData, Event: dom.window.Event, MouseEvent: dom.window.MouseEvent,
  requestAnimationFrame: callback => { callback(); return 0; },
  IS_REACT_ACT_ENVIRONMENT: true,
});
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
const { createRoot } = await import('react-dom/client');
const { SearchParamsContext } = await import('next/dist/shared/lib/hooks-client-context.shared-runtime.js');
const { ServicePlanner } = await import('../src/components/planner/service-planner.tsx');
const { BookingEnquiry } = await import('../src/components/forms/enquiry-form.tsx');
const root = createRoot(document.getElementById('root'));

async function mount(Component, query = '') {
  await act(async () => { root.render(React.createElement(SearchParamsContext.Provider, { value: new URLSearchParams(query) }, React.createElement(Component))); });
}
async function click(element) {
  assert.ok(element, 'Expected interactive element');
  await act(async () => { element.click(); });
}
function button(text) { return [...document.querySelectorAll('button')].find(item => item.textContent.includes(text)); }
function checkbox(text) { return [...document.querySelectorAll('label')].find(item => item.textContent.includes(text))?.querySelector('input'); }
async function select(id, value) {
  await act(async () => { const field = document.getElementById(id); field.value = value; field.dispatchEvent(new Event('change', { bubbles: true })); });
}
after(async () => { await act(async () => root.unmount()); dom.window.close(); });

test('mixed choices, platform and channels reach the booking enquiry and WhatsApp draft', async () => {
  await mount(ServicePlanner);
  assert.equal(button('Discuss my plan').disabled, true);
  for (const choice of ['Reduce repetitive admin', 'Create better business content', 'Connect my business tools', 'Manage Meta enquiries']) await click(checkbox(choice));
  await select('planner-business', 'shop');
  await select('planner-stage', 'ready');
  await select('planner-platform', 'claude');
  await click(checkbox('Instagram'));
  const href = [...document.querySelectorAll('a')].find(item => item.textContent.includes('Discuss my plan')).getAttribute('href');
  assert.ok(href.includes('platform=claude'));
  assert.ok(href.includes('channels=instagram'));
  await mount(BookingEnquiry, href.split('?')[1]);
  assert.equal(document.getElementById('package'), null);
  assert.equal(document.getElementById('business').value, 'Shop or online seller');
  const task = document.getElementById('message').value;
  for (const expected of ['Centralized AI business OS', 'Custom automation', 'Business AI assistant setup', 'Meta AI automation services', 'Claude', 'Instagram']) assert.ok(task.includes(expected));
  document.getElementById('name').value = 'Example customer';
  await click(button('Preview my enquiry'));
  const whatsapp = [...document.querySelectorAll('a')].find(item => item.textContent.includes('Open WhatsApp draft'));
  const message = new URL(whatsapp.href).searchParams.get('text');
  assert.ok(message.includes(task));
  assert.ok(message.includes('Example customer'));
  assert.ok(message.startsWith('AI services conversation'));
  await click(button('Edit my enquiry'));
  assert.equal(document.getElementById('message').value, task);
  assert.equal(document.getElementById('name').value, 'Example customer');
});

test('coaching package links and invalid planner links retain the original enquiry form', async () => {
  await mount(BookingEnquiry, 'package=growth&needs=unknown');
  assert.equal(document.getElementById('package').value, 'growth');
  assert.equal(document.getElementById('message').value, '');
  document.getElementById('name').value = 'Example customer';
  document.getElementById('business').value = 'Example shop';
  document.getElementById('message').value = 'Help with customer replies';
  await click(button('Preview my enquiry'));
  assert.ok(document.querySelector('pre').textContent.includes('AI coaching conversation'));
  assert.ok(document.querySelector('pre').textContent.includes('AI Growth'));
});

test('copy success, clipboard fallback, reset and hidden choices behave correctly', async () => {
  await mount(ServicePlanner, 'needs=content,enquiries&platform=gemini&channels=facebook');
  let copied = '';
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async value => { copied = value; } } });
  await click(button('Copy my plan'));
  assert.ok(copied.includes('Gemini'));
  assert.ok(document.body.textContent.includes('Plan copied'));
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('Unavailable'); } } });
  await click(button('Copy my plan'));
  assert.ok(document.getElementById('plan-copy').value.includes('Gemini'));
  assert.equal(document.activeElement.id, 'plan-copy');
  await click(checkbox('Manage Meta enquiries'));
  assert.equal(checkbox('Facebook'), undefined);
  const href = [...document.querySelectorAll('a')].find(item => item.textContent.includes('Discuss my plan')).getAttribute('href');
  assert.ok(!href.includes('channels='));
  await click(button('Start again'));
  assert.equal(document.querySelectorAll('input:checked').length, 0);
  assert.equal(button('Discuss my plan').disabled, true);
  assert.equal(document.getElementById('plan-copy'), null);
  assert.equal(document.activeElement.type, 'checkbox');
});

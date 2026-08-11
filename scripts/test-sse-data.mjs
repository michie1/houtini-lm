import assert from 'node:assert/strict';
import { parseSseDataLine } from '../dist/sse.js';

assert.equal(parseSseDataLine('data:{"answer":"Paris"}'), '{"answer":"Paris"}');
assert.equal(parseSseDataLine('data: {"answer":"Paris"}'), '{"answer":"Paris"}');
assert.equal(parseSseDataLine('data:[DONE]'), '[DONE]');
assert.equal(parseSseDataLine('data: [DONE]'), '[DONE]');
assert.equal(parseSseDataLine('event: message'), null);
assert.equal(parseSseDataLine(''), null);

console.log('SSE data parsing tests passed');

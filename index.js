import assert from 'assert';
import {EventEmitter} from 'events';

// So no tree-shaking
assert(true);
const emitter = EventEmitter;

import assert from 'assert';
import EventEmitter from 'events';
import debounce from 'debounce-stream';

// So no tree-shaking
assert(true);
const emitter = new EventEmitter();
const foo = () => debounce(1000);
foo();

import Store from './services/Store.js';
import { loadData } from './services/Order.js';

const $ = args => document.querySelector(this, args);
const $$ = args => document.querySelectorAll(this, args);

HTMLElement.prototype.on = function(a, b, c) { return this.addEventListener(a, b, c); };
HTMLElement.prototype.off = function(a, b, c) { return this.removeEventListener(a, b, c); };
HTMLElement.prototype.$ = args => document.querySelector(args);
HTMLElement.prototype.$$ = args => document.querySelectorAll(args);

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
    loadData();
})
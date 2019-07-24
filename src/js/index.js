import {str, add, multiply as m} from './Search.js';
import d_str from './View';
import * as SearchView from './SearchView';

console.log(d_str);
console.log(str);

console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`2 x 3 = ${m(2, 3)}`);

console.log(`6 / 3 = ${SearchView.div(6, 3)}`);
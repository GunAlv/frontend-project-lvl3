import 'core-js/stable';

import './style.scss';
import 'bootstrap';

const foo = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise is resolved');
  }, 1000);
});

foo().then(console.log);

console.log('Webpack setup');

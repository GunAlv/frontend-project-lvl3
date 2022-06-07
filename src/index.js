import 'core-js/stable';

import 'bootstrap';

import './style.scss';

const foo = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Promise is resolved');
  }, 1000);
});

foo().then(console.log);

console.log('Webpack setup');

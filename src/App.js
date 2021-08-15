import 'lazysizes';
// React Related Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';
import ClientArea from './components/ClientArea';
import MobileMenu from './components/MobileMenu';
// Import React components that we created
import MyAmazingComponent from './components/MyAmazingComponent';
import RevealOnScroll from './components/RevealOnScroll';
import StickyHeader from './components/StickyHeader';
import './css/styles.less';

ReactDOM.render(
  <MyAmazingComponent />,
  document.querySelector('#my-react-example'),
);

new ClientArea();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
new MobileMenu();
let modal;

document.querySelectorAll('.open-modal').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof modal == 'undefined') {
      import(/* webpackChunkName: "modal" */ './components/Modal')
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log('There was a problem.'));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}

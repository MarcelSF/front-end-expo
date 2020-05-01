import Typed from 'typed.js';

const loadDynamicHeaderText = () => {
  new Typed('#typed_test', {
    strings: ["Look at this weird web page!", "Learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicHeaderText };

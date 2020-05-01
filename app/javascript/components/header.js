import Typed from 'typed.js';

const loadDynamicHeaderText = () => {
  new Typed('#typed_test', {
    strings: ["Best Strategy Games!", "Perfect for quarantine!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicHeaderText };

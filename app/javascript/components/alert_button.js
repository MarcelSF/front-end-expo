const myFunction = () => {
  const button = document.querySelector('#js-button');
  if (button) {
    button.addEventListener('click', () => {
      alert('You clicked the button');
    });
  }
};

export { myFunction };

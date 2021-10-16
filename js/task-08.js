const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.password.value === '' ||
    event.currentTarget.elements.email.value === ''
  ) {
    alert('All form fields must be filled out!');
  } else {
    const userInfo = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.log(userInfo);
    event.currentTarget.reset();
  }
}

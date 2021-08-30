const heroCtaBtn = document.querySelector('.hero-btn-cta');
const email = document.querySelector('.email-input');
const ctaBtn = document.querySelector('.btn-cta');
const emailCTA = document.querySelector('.email-input-cta');

heroCtaBtn.addEventListener('click', (e) => {
  e.preventDefault();

  checkInput();
});

ctaBtn.addEventListener('click', (e) => {
  e.preventDefault();

  checkInputCTA();
});

function checkInput() {
  let emailValue = email.value;

  if (emailValue === '') {
    setError(email, 'Email cannot be empty');
  } else if (!isEmail(emailValue)) {
    setError(email, 'Looks like this is not an email');
    emailValue = '';
  }
}

function checkInputCTA() {
  const emailCTAValue = emailCTA.value;

  if (emailCTAValue === '') {
    setError(emailCTA, 'Email cannot be empty');
  } else if (!isEmail(emailCTAValue)) {
    setError(emailCTA, 'This looks like not an email');
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const notification = formControl.querySelector('.notification');

  email.value = '';
  formControl.classList.add('error');
  notification.innerHTML = message;
}

// Function to check valid email using regex
function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//
window.onload = () => {
  email.value = '';
};

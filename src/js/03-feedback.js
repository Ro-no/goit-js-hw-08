const throttle = require('lodash.throttle');

const LS_KEY = 'feedback-form-state';

const formFeedback = document.querySelector('.feedback-form');
const emailInput = formFeedback.querySelector('input[name="email"]');
const messageInput = formFeedback.querySelector('textarea[name="message"]');

formFeedback.addEventListener('input', throttle(saveFormState, 500));

window.addEventListener('DOMContentLoaded', fillFormFields());

formFeedback.addEventListener('submit', clearFormState);

function saveFormState() {
  const objectData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem(LS_KEY, JSON.stringify(objectData));
}

function fillFormFields() {
  const savedState = localStorage.getItem(LS_KEY);

  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email;
    messageInput.value = message;
  }
}

function clearFormState(event) {
  event.preventDefault();

  const objectData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem(LS_KEY);
  emailInput.value = '';
  messageInput.value = '';

  console.log('Form submitted:', objectData);
}

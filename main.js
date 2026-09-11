'use strict'

import startTimer from "./src/js/timer.js"

startTimer();

// Validation

const form = document.querySelector('.signup-form');
  

if (form) {

  const fields = form.querySelectorAll('.form-field');

  const validateField = (field) => {
    const input = field.querySelector('.form-input');
    if (!input) return true;

    const value = input.value.trim();
    let isValid = true;

    if (value === '') {
      isValid = false;
    } 
    else if (input.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    }

    if (!isValid) {
      field.classList.add('error');
      input.setAttribute('aria-invalid', 'true');
    } else {
      field.classList.remove('error');
      input.setAttribute('aria-invalid', 'false');
    }

    return isValid;
  };

  fields.forEach((field) => {
  const input = field.querySelector('.form-input');

  if (input) {
    input.addEventListener('input', () => {
      validateField(field);
    });
  }
});

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isFormValid = true;

    fields.forEach((field) => {
      const fieldValid = validateField(field);
      if (!fieldValid) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      const formData = new FormData(form);
    }
  });
}
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

fillInput();

function onInput(event) {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const formData = JSON.parse(savedFormData) || {};
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log({
        email: event.currentTarget.elements.email.value,
        message: event.currentTarget.elements.message.value,
    });
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function fillInput() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormData);
    if (parsedFormData) {
        email.value = parsedFormData.email || '';
        textarea.value = parsedFormData.message || '';
    }
}

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(event){
 event.preventDefault();
 event.currentTarget.reset();
 localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event){
 const savedFormData = localStorage.getItem(STORAGE_KEY);
 const formData = JSON.parse(savedFormData) || {};
 formData[event.target.name] = event.target.value;
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea(){
 const savedFormData = localStorage.getItem(STORAGE_KEY);
 const parsedFormData = JSON.parse(savedFormData);
    if (parsedFormData) {
        form.elements.email.value = parsedFormData.email || '';
        form.elements.message.value = parsedFormData.message || '';
    }
}
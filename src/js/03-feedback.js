import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = "feedback-form-state";

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('submit', onFormSubmit);
textareaEl.addEventListener('input', throttle(onTextareaInput, 500));

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value; 
    console.log(formData);
})

populateTextarea();

function onFormSubmit(event){
 event.preventDefault();
 event.currentTarget.reset();
 localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event){
 const message = event.target.value;
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea(){
 const savedMessage = localStorage.getItem(STORAGE_KEY);
 const savedMessageParse = JSON.parse(savedMessage);

 if(savedMessage){
    console.log(savedMessage);
    textareaEl.value = savedMessageParse.email || '';
    inputEl.value = savedMessageParse.message || ''; 
 }
}
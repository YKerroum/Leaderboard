import './index.css';
import Data from './data.js';

const formElement = document.querySelector('#add-form');
const recentElement = document.querySelector('#recent-content');
const loadElement = document.querySelector('.lds-default');

const data = new Data();

const fillList = () => {
  loadElement.style.display = 'inline-block';
  data.getData().then(() => {
    recentElement.innerHTML = '';
    data.scores.forEach((element, index) => {
      recentElement.innerHTML += `
<li id="${index}li" class="forms ${index % 2 ? 'greyList' : ''}">${element.user} : ${element.score}</li>
`;
    });
    loadElement.style.display = 'none';
  });
};

window.onload = () => {
  data.createGame().then(() => { fillList(); });
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const formdata = new FormData(formElement);
    data.setData(formdata.get('name'), formdata.get('score')).then(() => {
      document.querySelector('#name').value = '';
      document.querySelector('#score').value = '';
      fillList();
    });
  });
  document.querySelector('#refresh').addEventListener('click', () => {
    fillList();
  });
};
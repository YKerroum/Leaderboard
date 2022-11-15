import './index.css';
import Data from './data';

const formElement=document.querySelector('#add-form');
const recentElement=document.querySelector('#recent-content');

const data=  new Data();
const fillList= () => {
data.getData();
recentElement.innerHTML='';
data.scores.forEach((element,index) => {
recentElement.innerHTML += `
<li id="${index}li" class="${index%2? 'greyList' : ''}">${element.name} : ${element.score}</li>
`
})

}

window.onload = () => {

formElement.addEventListener("submit", (e) => {
data.setData({name:e.target.querySelector('#name').value ,score:e.target.querySelector('#score').value});
console.log(data);
fillList();
});

document.querySelector("#refresh").addEventListener("click",()=>{
  fillList();
});

}
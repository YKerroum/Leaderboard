import './index.css';
import Scores from './scores'
import Data from './data';

const formElement=document.querySelector('#add-form');
const recentElement=document.querySelector('#recent-content');


const fillList= (datas) => {
recentElement.innerHTML='';
datas.forEach((data,index) => {
recentElement.innerHTML += `
<li id="${index}li" class="${index%2? 'greyList' : ''}">${data.name} : ${data.score}</li>
`
})

}

window.onload = () => {
const data= Data.getData;
const scores=new Scores(data);

formElement.addEventListener('submit', (e) => {
Data.setData(scores.addScore({name:e.target.querySelector('#name').value ,score:e.target.querySelector('#score').value}));
fillList(scores);
})

document.querySelector("#refresh").addEventListener("click",()=>{
  const data= Data.getData;
  fillList(data);
})

}
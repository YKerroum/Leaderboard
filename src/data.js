export default class Data {
  constructor(){
  this.scores=[];
  }

  getData=() =>{
  this.scores=  localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];
  }

  setData=(score) =>{
  this.scores.push(score);
  localStorage.setItem('scores', JSON.stringify(this.scores));
  } 
}

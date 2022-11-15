export default class Scores {
  constructor(data) {
  this.scores=data;
  }
  
  addScore=(score)=> {
  this.scores.push(score);
  return this.scores;
  }

}
export default class Data {
  constructor () {
    this.scores = [];
    this.id=localStorage.getItem('id');
  }

  createGame= async () =>{
        await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        headers: {
      'Content-Type': 'application/json'
       },
        body: JSON.stringify({
        name: "My cool new game",
        })
    })
  .then((response) => response.json())
  .then((json) => {
    if(localStorage.getItem('id')===null){
    this.id=json.result.slice(13, -6).trim();  
    localStorage.setItem('id', this.id);
    }
  });
  
  }

  getData= async () => {
    this.scores= await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.id}/scores/`)
    .then(response => response.json())
    .then(json => json.result);
  }

  setData= async (user,score) => {
    await fetch(`http://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.id}/scores/`,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'}
      ,
      body: JSON.stringify({
      user: user,
      score: score
      })
  })
    .then(response => response.json())
    .then(json => json.result);
  }
}

export default class Data {
  constructor () {
    this.scores = [];
    this.ID = null;
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
    this.ID=json.result.slice(13, -6).trim();
    localStorage.setItem('id', this.ID);
  });
  
  }

  getData= async () => {
    await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.ID}/scores/`)
    .then(response => response.json())
  .then(json => {this.scores=[...json.result]});
  }

  setData=async (newScore) => {

    await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.ID}/scores/`,{
      method: 'POST',
      body: JSON.stringify({
      user: newScore.name,
      score: newScore.score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json());
  }
}

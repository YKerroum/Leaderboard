export default class Data {
  static getData=() =>localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];
  static setData=(scores) =>localStorage.setItem('scores', JSON.stringify(scores));
}

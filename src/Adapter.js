class Adapter {
  static getShows (){
    return fetch("http://api.tvmaze.com/shows")
    .then(res => res.json())
  }
}

export default Adapter

const API_PATH = "http://95.85.18.223:4000/api"

const toJson = (response) => {
  return response.json();
}

const API = {
  events: function(){
    return fetch(API_PATH + '/events', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(toJson);
  }
}

export default API

const API_PATH = "http://localhost:3000"

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

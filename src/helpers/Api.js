const API_PATH = "http://10.0.2.2:3000"

const toJson = (response) => {
  return response.json();
}

const API = {
  events: function(){
    return fetch(API_PATH + '/posts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(toJson);
  }
}

export default API

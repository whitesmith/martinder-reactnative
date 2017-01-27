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
  },
  createEvent: function(){
    return fetch(API_PATH + '/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "event": {
          title: 'Futebol 5vs5',
          category: 'Sports',
          start_date: "2017-04-17T15:00:00",
          location: 'Martim de Freitas',
          duration: '30',
          description: "Lorem Ipsum Ipsum",
          max_participants: 10
        }
      })
    })
    .then(toJson);
  }
}

export default API

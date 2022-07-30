var axios = require('axios');

const BASE_URL = 'http://127.0.0.1';
const PORT = '8081';
const url = `${BASE_URL}:${PORT}`;
function get() {
  axios
    .get(url)
    .then(res=>{
      console.log(res.data);
    })
}

get()
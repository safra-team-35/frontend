import axios from 'axios';

export default axios.create({
  baseURL: 'http://34.71.109.67:3000/',
  headers: {
    'Content-type': 'application/json',
  },
});

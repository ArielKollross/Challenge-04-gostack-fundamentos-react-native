import axios from 'axios';
// run yarn json-server --host your_ip server.json -p 3333
const ip = '192.168.15.38';

const api = axios.create({
  baseURL: `http://${ip}:3333`,
});

export default api;

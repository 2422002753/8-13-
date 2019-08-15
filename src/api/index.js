import axios from 'axios';

axios.interceptors.response.use(res => res.data, err => Promise.reject(err));

const getList = () => axios.get('/list', { params: { id: 1 } });
const login = (user,pass)=>axios.post('/login',{user,pass});
export { getList,login };

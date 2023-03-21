import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://rentall-app-v2-default-rtdb.firebaseio.com/',
});

export default instance;

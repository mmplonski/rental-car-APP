import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://identitytoolkit.googleapis.com/v1',
	params: {
		key: 'AIzaSyAktz1zCcxavrFY5U3QEEMD445F2cmDqn0',
	},
});

export default instance;

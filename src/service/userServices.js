import { API_URL } from '../utils/contans';
const PATH = 'user';

const getUsers = async () => {
	const response = await fetch(`${API_URL}${PATH}`);
	return response.json();
};
const createUser = async (data) => {
	console.log(data);
	const response = await fetch(`${API_URL}${PATH}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response.json();
};

export { getUsers, createUser };

const baseUrl = 'https://jsonplaceholder.typicode.com'

const fetchApi = async (endpoint: string, options = {}) => {
  try {
	const res = await fetch(baseUrl + endpoint, { ...options })
	return res.json();
  } catch (err) {
	return Promise.reject(err);
  }
}
export const getUsersRequest = async () => {
  return await fetchApi(`/users`, { method: 'GET' } );
}

import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '17a9cfd4d4msh6afbbc973cf827fp1e074bjsn672254bc7e1d',
    },
  });
  return data;
};

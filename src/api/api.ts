import axios from 'axios';

export const submitPet = (data: any) => {
  return axios.post('https://reqres.in/api/users', data, {
    headers: {
      'x-api-key': 'reqres_f9c3ca7f221f402e9f235b9bfed00a2f',
    },
  });
};

export const getRandomPetImage = () => {
  return axios.get('https://dog.ceo/api/breeds/image/random');
};

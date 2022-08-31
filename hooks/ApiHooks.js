import {useEffect, useState} from 'react';

const apiUrl = 'https://media.mw.metropolia.fi/wbma/';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl + 'media?limit=5');
      const json = await response.json();
      console.log(json);
      const allMediaData = json.map(async (mediaItem) => {
        const response = await fetch(apiUrl + 'media/' + mediaItem.file_id);
        return await response.json();
      });

      setMediaArray(await Promise.all(allMediaData));
    } catch (error) {
      console.log('media fetch failed', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);
  return {mediaArray};
};

const useLogin = () => {
  const postLogin = async (userCredentials) => {
    // user credentials format: {username: 'someUsername', password: 'somePassword'}
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
      // TODO: add method, headers and body for sending json data with POST
    };
    try {
      const response = await fetch(apiUrl + 'login', options);
      if (!response.ok) {
        throw new Error(response.status + ' - ' + response.statusText);
      }
      return await response.json();
      // TODO: use fetch to send request to login endpoint and return the result as json, handle errors with try/catch and response.ok
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {postLogin};
};

const useUser = () => {};

export {useMedia, useUser, useLogin};

/*
  let mediaArray = [];
   const loadMedia = async () => {
     const response = await fetch(url);
     const json = await response.json();
     console.log(json);
   };
  }
  */

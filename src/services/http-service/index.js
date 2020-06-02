import axios, { CancelToken } from 'axios';
import { APP_URL } from 'react-native-dotenv';
import { CANCEL } from 'redux-saga';

const httpClient = axios.create({
  baseURL: APP_URL
});

export const HttpService = params => {
  const { token: cancelToken, cancel } = CancelToken.source();

  const request = httpClient({
    ...params,
    cancelToken
  });

  request[CANCEL] = () => cancel();
  return request;
};

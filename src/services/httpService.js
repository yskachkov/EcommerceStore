import axios, { CancelToken } from 'axios';
import { CANCEL } from 'redux-saga';

const httpClient = axios.create();

export const httpService = params => {
  const { token: cancelToken, cancel } = CancelToken.source();

  const request = httpClient({
    ...params,
    cancelToken
  });

  request[CANCEL] = () => cancel();
  return request;
};

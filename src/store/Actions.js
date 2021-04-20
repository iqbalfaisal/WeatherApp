import api from '../services/api';
import {SET_ALL} from './Types';

export function fetchAll() {
  return dispatch => {
    api
      .post('/find?')

      .then(data => {
        dispatch({
          type: SET_ALL,
          data: data.data.list,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

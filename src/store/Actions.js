import {SET_ALL} from './Types';

export function fetchAll() {
  return dispatch => {
    fetch(
      'http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=63e113a2f9ca2c167772a6d08709d773',
      {
        method: 'POST',
      },
    )
      .then(data => {
        console.log(data);

        dispatch({
          type: SET_ALL,
          data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

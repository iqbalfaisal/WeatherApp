import {SET_ALL} from './Types';

const initialState = {data: null};

export default function Reducers(state = initialState, action) {
  if (action.type === SET_ALL) {
    return {
      ...state,
      data: action.data,
    };
  }
  return state;
}

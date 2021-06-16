import axios from 'axios';
import {useDispatch} from 'react-redux';
import {apikey, baseUrl, hash, ts} from '../../services';

export const types = {
  START_CHARACTERS_LOADING: 'START_CHARACTERS_LOADING',
  GET_CHARACTERS_SUCCES: 'GET_CHARACTERS_SUCCES',
  GET_CHARACTERS_FAILED: 'GET_CHARACTERS_FAILED',
  START_SEARCH_LOADING: 'START_SEARCH_LOADING',
  GET_SEARCH_SUCCESS: 'GET_SEARCH_SUCCESS',
  GET_SEARCH_FAILED: 'GET_SEARCH_FAILED',
};

export const useMainFetch = () => {
  const dispatch = useDispatch();
  const getCharacters = async limit => {
    dispatch({type: types.START_CHARACTERS_LOADING});
    try {
      const response = await axios.get(`${baseUrl}/characters`, {
        params: {
          ts,
          apikey,
          hash,
          limit,
        },
      });
      if (response) {
        return dispatch({
          type: types.GET_CHARACTERS_SUCCES,
          payload: response?.data?.data?.results,
        });
      } else {
        dispatch({type: types.GET_CHARACTERS_FAILED});
      }
    } catch (err) {
      dispatch({type: types.GET_CHARACTERS_FAILED});
      console.log('error==>', err);
    }
  };

  const searchCharacters = async (limit, term) => {
    dispatch({type: types.START_SEARCH_LOADING});
    try {
      const response = await axios.get(`${baseUrl}/characters`, {
        params: {
          ts,
          apikey,
          hash,
          limit,
          nameStartsWith: term,
        },
      });
      if (response) {
        return dispatch({
          type: types.GET_SEARCH_SUCCESS,
          payload: response.data?.data?.results,
        });
      } else {
        dispatch({type: types.GET_SEARCH_FAILED});
      }
    } catch (err) {
      dispatch({type: types.GET_SEARCH_FAILED});
      console.log('error==>', err);
    }
  };
  return {getCharacters, searchCharacters};
};

const initialState = {
  loading: false,
  characters: [],
  searchLoading: false,
  searchList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_CHARACTERS_LOADING:
      return {...state, loading: true};
    case types.GET_CHARACTERS_SUCCES:
      return {...state, loading: false, characters: action.payload};
    case types.GET_CHARACTERS_FAILED:
      return initialState;
    case types.START_SEARCH_LOADING:
      return {...state, searchLoading: true};
    case types.GET_SEARCH_SUCCESS:
      return {...state, searchLoading: false, searchList: action.payload};
    case types.GET_SEARCH_FAILED:
      return {...state, searchList: []};
    default:
      return state;
  }
};

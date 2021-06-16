import axios from 'axios';
import {useDispatch} from 'react-redux';
import {apikey, baseUrl, hash, ts} from '../../services';

export const types = {
  START_COMICS_LOADING: 'START_COMICS_LOADING',
  GET_COMICS_SUCCESS: 'GET_COMICS_SUCCESS',
  GET_COMICS_FAILED: 'GET_COMICS_FAILED',
  START_EVENTS_LOADING: 'START_EVENTS_LOADING',
  GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
  GET_EVENTS_FAILED: 'GET_EVENTS_FAILED',
  START_SERIES_LOADING: 'START_SERIES_LOADING',
  GET_SERIES_SUCCES: 'GET_SERIES_SUCCES',
  GET_SERIES_FAILED: 'GET_SERIES_FAILED',
  START_STORIES_LOADING: 'START_STORIES_LOADING',
  GET_STORIES_SUCCESS: 'GET_STORIES_SUCCESS',
  GET_STORIES_FAILED: 'GET_STORIES_FAILED',
};

export const useCharacter = () => {
  const dispatch = useDispatch();
  const getComics = async (id, limit) => {
    dispatch({type: types.START_COMICS_LOADING});
    try {
      const response = await axios.get(`${baseUrl}/characters/${id}/comics`, {
        params: {
          ts,
          apikey,
          hash,
          limit,
        },
      });
      if (response) {
        return dispatch({
          type: types.GET_COMICS_SUCCESS,
          payload: response?.data?.data?.results,
        });
      } else {
        dispatch({type: types.GET_COMICS_FAILED});
      }
    } catch (err) {
      dispatch({type: types.GET_COMICS_FAILED});
      console.log('error==>', err);
    }
  };

  const getEvents = async (id, limit) => {
    dispatch({type: types.START_EVENTS_LOADING});
    try {
      const response = await axios.get(`${baseUrl}/characters/${id}/events`, {
        params: {
          ts,
          apikey,
          hash,
          limit,
        },
      });
      if (response) {
        return dispatch({
          type: types.GET_EVENTS_SUCCESS,
          payload: response?.data?.data?.results,
        });
      }
    } catch (err) {
      dispatch({type: types.GET_EVENTS_FAILED});
      console.log('error==>', err);
    }
  };

  const getSeries = async (id, limit) => {
    dispatch({type: types.START_SERIES_LOADING});
    try {
      const response = await axios.get(`${baseUrl}/characters/${id}/series`, {
        params: {
          ts,
          apikey,
          hash,
          limit,
        },
      });
      if (response) {
        return dispatch({
          type: types.GET_SERIES_SUCCES,
          payload: response?.data?.data?.results,
        });
      }
    } catch (err) {
      dispatch({type: types.GET_SERIES_FAILED});
      console.log('error==>', err);
    }
  };

  const getStories = async (id, limit) => {
    dispatch({type: types.START_STORIES_LOADING});
    try {
      const response = await axios.get(`${baseUrl}/characters/${id}/stories`, {
        params: {
          ts,
          apikey,
          hash,
          limit,
        },
      });
      if (response) {
        return dispatch({
          type: types.GET_STORIES_SUCCESS,
          payload: response?.data?.data?.results,
        });
      }
    } catch (err) {
      dispatch({type: types.GET_STORIES_FAILED});
      console.log('error==>', err);
    }
  };
  return {getComics, getEvents, getSeries, getStories};
};

const initialState = {
  comicsLoading: false,
  comicsList: [],
  eventsLoading: false,
  eventsList: [],
  seriesLoading: false,
  seriesList: [],
  storiesLoading: false,
  storiesList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_COMICS_LOADING:
      return {...state, comicsLoading: true};
    case types.GET_COMICS_SUCCESS:
      return {...state, comicsLoading: false, comicsList: action.payload};
    case types.GET_COMICS_FAILED:
      return initialState;
    case types.START_EVENTS_LOADING:
      return {...state, eventsLoading: true};
    case types.GET_EVENTS_SUCCESS:
      return {...state, eventsLoading: false, eventsList: action.payload};
    case types.GET_EVENTS_FAILED:
      return initialState;
    case types.START_SERIES_LOADING:
      return {...state, seriesLoading: true};
    case types.GET_SERIES_SUCCES:
      return {...state, seriesLoading: false, seriesList: action.payload};
    case types.GET_SERIES_FAILED:
      return initialState;
    case types.START_STORIES_LOADING:
      return {...state, storiesLoading: true};
    case types.GET_STORIES_SUCCESS:
      return {...state, storiesLoading: false, storiesList: action.payload};
    case types.GET_STORIES_FAILED:
      return initialState;
    default:
      return state;
  }
};

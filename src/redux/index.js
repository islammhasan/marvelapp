import {combineReducers} from 'redux';
import main from './main';
import character from './character';

export default combineReducers({
  main,
  character,
});

import { combineReducers } from 'redux';

import posts from './posts';
import coments from './coments';


export default combineReducers({
  posts,
  coments
});

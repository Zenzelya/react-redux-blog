

export default function posts(state = {}, action) {
  
  const newState; 
  switch (action.type) {
    case 'FETCH_POSTS': {
      newState = Object.assign({}, state, {
        posts: action.payload
      });
      newState.posts = data;
      return newState;
  }
    default:
      return state;
  }
}

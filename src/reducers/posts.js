

	export default function posts(state = {}, action) {
  
  switch (action.type) {
    case 'FETCH_POSTS': {
        console.log(action.payload)
        const newState = Object.assign({}, state, {
        posts: action.payload
      });
      return newState;
  }
    default:
      return state;
  }
}


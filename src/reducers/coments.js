
export default function coments(state = {}, action) {
  switch (action.type) {
      case 'FETCH_COMENTS': {
        console.log(action.payload)
        const newState = Object.assign({}, state, {
        coments: action.payload
      });

      return newState;
  }
      default:
      return state;
  }
}
const pollItemReducerDefaultState = {};
export default (state = pollItemReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_POLL':
      return action.poll;
    default:
      return state;
  }
};

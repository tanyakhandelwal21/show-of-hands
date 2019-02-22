// Expenses Reducer

const pollsReducerDefaultState = [];

export default (state = pollsReducerDefaultState, action) => {
  
  switch (action.type) {
    case 'ADD_POLL':
      return [
        state,
        poll: action.poll
      ];
    case 'REMOVE_POLL':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_POLL':
      return state.map((poll) => {
        if (poll.id === action.id) {
          return Object.assign(
            poll,
            action.updates
          )
        } else {
          return poll;
        };
      });
    case 'LIST_POLLS':
      return action.polls;
    case 'SET_POLLS':
      return action.polls;
    default:
      return state;
  }
};

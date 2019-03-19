import selectPolls from '../selectors/polls';

//Polls Reducer
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
      return {
        polls: action.polls || state.polls
      }
    case 'GET_POLL':
      return action.poll;
    default:
      return state;
  }
};

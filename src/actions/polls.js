import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addPoll = (poll) => ({
  type: 'ADD_POLL',
  poll
});



export const listPolls = (polls) => ({
  type: 'LIST_POLLS',
  polls
});



export const listAllPolls = (pollData = {}) => {
  return (dispatch) => {

    database.ref('polls').once("value").then((polls) => {

      polls = polls.val()
      const pollsArray = Object.keys(polls).map(id => {
        polls[id].id = id
        return polls[id]
      })

      dispatch(listPolls(pollsArray))
    });
  };
};

export const startAddPoll = (pollData = {}) => {
  return (dispatch) => {
    const {
        title = '',
        description = '',
        category = 0,
        choices = [],
        start_date = new Date(),
        end_date = new Date(),
        public_results = false
    } = pollData;
    const poll = { title, description, category, choices, start_date, end_date, public_results };

    database.ref('polls').push(poll).then((ref) => {
      dispatch(addPoll({
        id: ref.key,poll
      }));
    });
  };
};

export const startEditPoll = (pollData = {}) => {
  debugger
  return (dispatch) => {
    const {
        title = '',
        description = '',
        category = 0,
        choices = [],
        start_date = new Date(),
        end_date = new Date(),
        public_results = false
    } = pollData;
    const poll = { title, description, category, choices, start_date, end_date, public_results };

    database.ref('polls').push(poll).then((ref) => {
      dispatch(addPoll({
        id: ref.key,poll
      }));
    });
  };
};


export const startRemovePoll = (pollData = {}) => {
  debugger
  return (dispatch) => {
    const {
        title = '',
        description = '',
        category = 0,
        choices = [],
        start_date = new Date(),
        end_date = new Date(),
        public_results = false
    } = pollData;
    const poll = { title, description, category, choices, start_date, end_date, public_results };

    database.ref('polls').push(poll).then((ref) => {
      dispatch(addPoll({
        id: ref.key,poll
      }));
    });
  };
};
// REMOVE_EXPENSE
export const removePoll = ({ id } = {}) => ({
  type: 'REMOVE_POLL',
  id
});

// EDIT_EXPENSE
export const editPoll = (id, updates) => ({
  type: 'EDIT_POLL',
  id,
  updates
});

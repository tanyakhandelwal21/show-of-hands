import uuid from 'uuid';
import database from '../firebase/firebase';
import firebase from '../firebase/firebase';

// Check if the poll is expired
const isExpired = poll => new Date(poll.end_date) < new Date()

export const listAllPolls = (pollData = {}) => {
  return (dispatch) => {
    database.ref('polls').once("value").then((polls) => {
      polls = polls.val()
      const pollsArray = Object.keys(polls).map(id => {
        polls[id].id = id
        return polls[id]
      }).filter(c => !isExpired(c))
      dispatch(listPolls(pollsArray))
    });
  };
};

export const startAddPoll = (pollData = {}) => {
    return (dispatch, getState) => {
        const {
            title = '',
                description = '',
                category = 0,
                choices = [],
                start_date = new Date(),
                end_date = new Date(),
                public_results = false
        } = pollData;

        const poll = {
            title,
            description,
            category,
            choices,
            start_date,
            end_date,
            public_results
        };
        //filter by date and time
        poll.start_date = new Date(poll.start_date).getTime()
	      poll.end_date = new Date(poll.end_date).getTime()
        poll.author = getState().auth.uid

        database.ref('polls').push(poll).then((ref) => {
            dispatch(getPoll({
                id: ref.key
            }));
        });
    };
};

export const startGetPoll = (pollData = {}) => {
  return (dispatch, getState) => {
    database.ref('polls').child(pollData.id).once("value").then((ref) => {
      const poll = ref.val()
      poll.id = ref.key
      poll.editable = (poll.author === getState().auth.uid)
        
        if (pollData.edit && !poll.editable || isExpired(poll)) {
        window.location = "/dashboard/polls"
        return;
      }
      dispatch(getPoll(poll));
    }).catch(e => console.error(e))
  };
};

export const startAnswerPoll = (id, answerIndex, userId, newVotesCount) => {
  return (dispatch) => {
    const pollRef = database.ref('polls').child(id);


    Promise.all([
      pollRef.child("choices").child(answerIndex).child("votes").set(newVotesCount),
      pollRef.child("responses").child(userId).set(answerIndex)
    ]).then(() => {
        dispatch(answerPoll({
            answer: answerIndex
        }));
    });
  };
};

export const startEditPoll = (id, newData) => {
    return (dispatch) => {
        database.ref('polls').child(id).update(newData).then(() => {
            dispatch(editPoll({
                id
            }));
        });
    };
};


export const startRemovePoll = (id) => {
    return (dispatch) => {
        database.ref('polls').child(id).remove().then(() => {
            dispatch(addPoll({
                id
            }));
        });
    };
};

// ADD_POLL
export const addPoll = (poll) => ({
  type: 'ADD_POLL',
  poll
});

// LIST POLL
export const listPolls = (polls) => ({
  type: 'LIST_POLLS',
  polls
});

// GET POLL
export const getPoll = (poll) => ({
  type: 'GET_POLL',
  poll
});

// REMOVE_POLL
export const removePoll = ({ id } = {}) => ({
  type: 'REMOVE_POLL',
  id
});

// EDIT_POLL
export const editPoll = (id, updates) => ({
    type: 'EDIT_POLL',
    id,
    updates
});

// ANSWER POLL
export const answerPoll = (id, updates) => ({
  type: 'ANSWER_POLL',
  id,
  updates
});

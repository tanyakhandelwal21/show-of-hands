import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  pollStatus: "ACTIVE"
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return Object.assign(state, {
        text: action.text
      });
    case 'SET_CATEGORY_FILTER':
      return Object.assign(state, {
        category: action.category
      });
    case "POLL_STATUS":
      return Object.assign(state, {
        pollStatus: action.status
      });
    case "DATE_ASC":
    case "DATE_DESC":
    case "NUMBER_OF_RESPONSES_ASC":
    case "NUMBER_OF_RESPONSES_DESC":
      return Object.assign(state, {
        sortBy: action.type
      });
    case 'SET_START_DATE':
      return Object.assign(state, {
        startDate: action.startDate
      });
    case 'SET_END_DATE':
      return Object.assign(state, {
        endDate: action.endDate
      });
    default:
      return state;
  }
};

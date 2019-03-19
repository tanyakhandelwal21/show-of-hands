import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
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
    case 'SORT_BY_NUMBEROFOPTIONS':
    return Object.assign(state, {
        sortBy: 'numberOfOptions'
      });
    case 'SORT_BY_DATE':
    return Object.assign(state, {
        sortBy: 'date'
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

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const triggerSort = type => ({
  type
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

export const setCategoryFilter = (category = '') => ({
  type: 'SET_CATEGORY_FILTER',
  category
});

export const setStatus = status => ({
  type: 'POLL_STATUS',
  status
});

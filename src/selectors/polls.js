import moment from 'moment';

// Get visible expenses

export default (polls, o) => {
  if(!o){
    return polls;
  }
  const { text, sortBy, startDate, endDate } = o;
  return polls.filter((poll) => {
    const createdAtMoment = moment(poll.start_date);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = poll.title.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.start_date < b.start_date ? 1 : -1;
    } else if (sortBy === 'numberOfOptions') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

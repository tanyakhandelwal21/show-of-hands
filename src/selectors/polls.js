import moment from 'moment';

// Get visible expenses

export default (polls, o) => {

  if(!o){
    return polls.polls;
  }

  const { category, text, sortBy, startDate, endDate } = o;
  return polls.polls.filter((poll) => {
    const createdAtMoment = moment(poll.start_date);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = poll.title.toLowerCase().includes(text.toLowerCase());
    const categoryMatch = category ? +poll.category === +category : true;
    return startDateMatch && endDateMatch && textMatch && categoryMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.start_date < b.start_date ? 1 : -1;
    } else if (sortBy === 'numberOfOptions') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

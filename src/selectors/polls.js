import moment from 'moment';

// Get visible expenses

export default (polls, o) => {

  if(!o){
    return polls.polls;
  }

  const { category, text, sortBy, startDate, endDate, pollStatus } = o;
  return polls.polls.filter((poll) => {
    const createdAtMoment = moment(poll.start_date);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = poll.title.toLowerCase().includes(text.toLowerCase());
    const categoryMatch = category ? +poll.category === +category : true
    const pollStatusMatch = pollStatus ? pollStatus === "ACTIVE" ? poll.end_date > new Date().getTime() : poll.end_date < new Date().getTime() : true
    return startDateMatch && endDateMatch && textMatch && categoryMatch && pollStatusMatch;
  }).sort((a, b) => {
      const countRes = r => Object.keys(r.responses || {}).length

      switch (sortBy) {
        case "DATE_ASC":
          return a.start_date > b.start_date ? -1 : 1;

        case "DATE_DESC":
          return a.start_date < b.start_date ? -1 : 1;

        case "NUMBER_OF_RESPONSES_ASC":
          return countRes(a.start_date) < countRes(b.start_date) ? -1 : 1;

        case "NUMBER_OF_RESPONSES_DESC":
          return countRes(a.start_date) > countRes(b.start_date) ? -1 : 1;
      }
  });
};

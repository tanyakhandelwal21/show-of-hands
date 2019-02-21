export default (polls) => {
  return polls
      .map((poll) => poll.amount)
      .reduce((sum, value) => sum + value, 0);
};

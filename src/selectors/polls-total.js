export default (polls) => {
	if(!polls) {
		return [];
	}
  return polls
      .map((poll) => poll.amount)
      .reduce((sum, value) => sum + value, 0);
};

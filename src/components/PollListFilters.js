import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByNumberOfOptions, setStartDate, setEndDate } from '../actions/filters';
import { setCategoryFilter, setTextFilter, sortByDate, sortByNumberOfOptions, setStartDate, setEndDate } from '../actions/filters';
	import { listPolls } from '../actions/polls';
	import { getCategoryOptions } from '../util/categories.js';

export class PollListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null
        };
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }
  onDatesChange({startDate, endDate}) {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange(calendarFocused) {
    this.setState({ calendarFocused });
  }
  onTextChange(e) {
    this.setState({
      textFilter: e.target.value
    })
    this.props.setTextFilter(e.target.value);
  };
  onCategoryChange (e) {
    this.props.setCategoryFilter(e.target.value);
  }

  onSortChange(e) {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'numberOfOptions') {
      this.props.sortByNumberOfOptions();
    }
  }
  render() {
    const { filters } = this.props;
    return (
      <div>
      <select
      id="select-category"
      onChange={this.onCategoryChange}
    >
        <option value="">Category</option>
        {getCategoryOptions()}
    </select>
      <br/>
        <input
          type="text"
          placeholder="search for a poll"
          value={this.state.textFilter || ""}
          onChange={this.onTextChange}
        />
        <select
          value={filters ? filters.sortBy : ''}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="numberOfOptions">Number of Options</option>
        </select>
        <DateRangePicker
          startDate={filters ? filters.startDate : null}
          endDate={filters ? filters.endDate : null}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch, props) => {
	
  const actions = {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setCategoryFilter: (text) => dispatch(setCategoryFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByNumberOfOptions: () => dispatch(sortByNumberOfOptions()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
  }

  Object.keys(actions).forEach(action => {
    const fn = actions[action]
    actions[action] = (...args) => {
      fn(...args)
      dispatch(listPolls())
      props.onChange();
    }
  })

  return actions
};


export default connect(mapStateToProps, mapDispatchToProps)(PollListFilters);

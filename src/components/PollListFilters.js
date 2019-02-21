import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByNumberOfOptions, setStartDate, setEndDate } from '../actions/filters';

export class PollListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null
        };
    }
  onDatesChange(startDate, endDate) {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange(calendarFocused) {
    this.setState({ calendarFocused });
  }
  onTextChange(e) {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange(e) {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'numberOfOptions') {
      this.props.sortByNumberOfOptions();
    }
  };
  render() {
    const { filters } = this.props;
    return (
      <div>
        <input
          type="text"
          value={filters ? filters.text : ''}
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

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByNumberOfOptions: () => dispatch(sortByNumberOfOptions()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(PollListFilters);

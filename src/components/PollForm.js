import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import './PollForm.css';

export default class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.onDescriptionChange = this.onDescriptionChange.bind(this)
    this.onNoteChange = this.onNoteChange.bind(this)
    this.onNumberOfOptionsChange = this.onNumberOfOptionsChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)


    this.state = {
      description: props.poll ? props.poll.description : '',
      note: props.poll ? props.poll.note : '',
      numberOfOptions: props.poll ? (props.poll.numberOfOptions / 100).toString() : '',
      createdAt: props.poll ? moment(props.poll.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };

  }
  
  componentDidMount () {
    const props = this.props;
    if (props.poll && props.poll.id) {
      this.setState({
        description: props.poll ? props.poll.description : '',
        note: props.poll ? props.poll.note : '',
        numberOfOptions: props.poll ? (props.poll.numberOfOptions / 100).toString() : '',
        createdAt: props.poll ? moment(props.poll.createdAt) : moment(),
        calendarFocused: false,
      })
    }
  }

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onNoteChange(e) {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onNumberOfOptionsChange(e) {
    const numberOfOptions = e.target.value;

    if (!numberOfOptions || numberOfOptions.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ numberOfOptions }));
    }
  }
  onDateChange(createdAt) {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }
  onFocusChange({ focused }) {
    this.setState(() => ({ calendarFocused: focused }));
  }
  onSubmit(e) {
    e.preventDefault();

    if (!this.state.description || !this.state.numberOfOptions) {
      this.setState(() => ({ error: 'Please provide description and numberOfOptions.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        numberOfOptions: parseFloat(this.state.numberOfOptions, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
          className="text-input-box"
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          /> 
          <input
            type="text"
            placeholder="numberOfOptions"
            value={this.state.numberOfOptions}
            onChange={this.onNumberOfOptionsChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your poll (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Save Poll</button>
        </form>
      </div>
    )
  }
}

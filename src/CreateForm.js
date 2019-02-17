import React from 'react';
import './CreateForm.css';

function Choice(props) {
    return (
        <div>
            <span className="choice-number">{props.num}</span>
            <span className="choice-title">{props.title}</span>
        </div>
    );
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choiceText: '',
            choices: ['Choice1', 'Choice2']
        };
        // this.handleClick = this.handleClick.bind(this);
    }
    updateChoiceText(e) {
        this.setState({ choiceText: e.target.value });
    }

    // Get current date in YYYY-MM-DD format with an offset of months
    getDate(offset) {
        let date = new Date();
        date.setMonth(date.getMonth() + offset);
        return date.toISOString().substring(0,10);
    }
    handleClick(e) {
        this.setState({
            choices: choices.concat([this.state.choiceText]);
        })
    }
    handleSubmit() {
        // TODO
    }
    render() {
        int i = 1;
        const choicesList = this.state.choices.map((choice) =>
            <li><Choice num={i++} title={choice} /></li>
        );
        return (
            <form onSubmit={this.handleSubmit}>

                // Title input
                <label>Poll Title</label>
                <input required maxlength="40" type="text" id="title-input"
                placeholder="Enter a title..."/>

                // Description input
                <label>Poll Description</label>
                <textarea required maxlength="250"
                rows="4" id="description-input"
                placeholder="Enter a short description..."></textarea>

                // Choice input
                <ul>{choicesList}</ul>
                <br/>
                <label>Response Choices</label>
                <input
                    type="text"
                    id="choice-input"
                    value={this.state.choiceText}
                    onChange={e => this.updateChoiceText(e)}
                    placeholder="Add a new choice..."/>
                <button onClick={(e) => this.handleClick(e) value="+" }></button>
                <br/>


                // TODO: implement category select box

                // Lifespan input
                <label>This poll will end on:</label>
                <input type="date" value={this.getDate(0)} min={this.getDate(0)} max={this.getDate(1)}/>

                // Public results input
                <input type="checkbox" id="private-results"/><label>Make end results private</label>

                <input type="submit" value="Create"/>
            </form>
        )
    }
}

export default CreateForm;

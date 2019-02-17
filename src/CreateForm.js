import React from 'react';
// import './CreateForm.css';

function Choice(props) {
    return (
        <div>
            <span className="choice-number">{props.num}</span>
            <input
                type="text"
                className="choice-title"
                value={props.text}
                onChange={(e) => props.onChange(e, props.num-1)}/>
        </div>
    );
}

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newChoiceText: '',
            choices: ['Choice1', 'Choice2'],
            date: this.getDate(0)
        };
        this.updateChoiceText = this.updateChoiceText.bind(this);
    }
    updateNewChoiceText(e) {
        this.setState({ newChoiceText: e.target.value });
    }

    updateChoiceText(e, index) {
        // console.log(e.target.value);
        let c = this.state.choices;
        c[index] = e.target.value;
        // console.log(c)
        this.setState({ choices: c });
    }
    updateDate(e) {
        this.setState({ date: e.target.value });
    }

    // Get current date in YYYY-MM-DD format with an offset of months
    getDate(offset) {
        let date = new Date();
        date.setMonth(date.getMonth() + offset);
        return date.toISOString().substring(0,10);
    }
    handleNewChoiceClick(e) {
        this.setState({
            choices: this.state.choices.concat([this.state.newChoiceText]),
            newChoiceText: ''
        })
    }

    handleSubmit() {
        // TODO
    }
    render() {
        let i = 1;
        const choicesList = this.state.choices.map((choice) =>
            <li><Choice num={i++} text={choice} onChange={this.updateChoiceText}/></li>
        );
        return (
            <form onSubmit={this.handleSubmit}>

                {/* Title input */}
                <label>Poll Title</label>
                <input required maxlength="40" type="text" id="title-input"
                placeholder="Enter a title..."/>
                <br/>

                {/* Description input */}
                <label>Poll Description</label>
                <textarea required maxlength="250"
                rows="4" id="description-input"
                placeholder="Enter a short description..."></textarea>
                <br/>

                {/* Choice input */}
                <label>Response Choices</label>
                <ul>{choicesList}</ul>
                <br/>
                <input
                    type="text"
                    id="choice-input"
                    value={this.state.newChoiceText}
                    onChange={e => this.updateNewChoiceText(e)}
                    placeholder="Add a new choice..."/>
                <input type="button" onClick={(e) => this.handleNewChoiceClick(e)} value="+"></input>
                <br/>

                {/* TODO: implement category select box */
                <select id="select-category">
                <option> Trending </option>
                <option> Pop culture</option>
                <option> Movies </option>
                <option> Big decisions </option>
                </select>
                
                }

                {/* Lifespan input */}
                <label>This poll will end on:</label>
                <input
                    type="date"
                    value={this.state.date}
                    min={this.getDate(0)}
                    max={this.getDate(1)}
                    onChange={e => this.updateDate(e)}/>
                <br/>

                {/* Public results input */}
                <input type="checkbox" id="private-results"/><label>Make end results private</label>
                <br/>

                <input type="submit" value="Create"/>
            </form>
        )
    }
}

export default CreateForm;

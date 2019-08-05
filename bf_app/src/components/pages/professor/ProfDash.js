import React, { Component } from "react";

class ProfView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentname: ""
        };
    }

    handleStudentnameChange = event => {
        this.setState({
            studentname: event.target.value
        });
    };

    render() {
        return (
            <form className='mainview'>
                <div className='mv_form'>
                    <h1>Professor Dash</h1>
                    <label>Student Name: </label>
                    <input
                        type='text'
                        value={this.state.studentname}
                        onChange={this.handleStudentnameChange}
                    />
                </div>
            </form>
        );
    }
}

export default ProfView;

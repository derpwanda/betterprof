import React, { Component } from "react";

class StudDash extends Component {
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

export default StudDash;

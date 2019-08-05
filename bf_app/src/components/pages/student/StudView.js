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
                    <h1>STUDENT VIEW</h1>
                </div>
            </form>
        );
    }
}

export default StudDash;

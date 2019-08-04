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
                    <h1>Prof Dash</h1>
                </div>
            </form>
        );
    }
}

export default ProfView;

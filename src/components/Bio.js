import React, { Component } from "react";

class Bio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            last_update: Date.now(),
            text: "This is your Bio Text",
        };

        this.edit = this.edit.bind(this)
    }

    edit = () => {
        let form = document.getElementById("bioForm")
        form.classList = "unhidden"
    };

    submitBioEdit = () =>  {
        let form = document.getElementById("bioForm")
        let text = document.getElementById("bioText")
        let input = document.getElementById("bioInput")
        this.setState({text: input.value, last_update: this.state.last_update}, () => {
            text.textContent = input.value;
        });
        form.classList = "hidden"
    }

    render() {
        const { text } = this.state;
        return (
            <div className={"bio"}>
                <div className={"bio-display"}>
                    <p id="bioText">{text}</p>
                    <button onClick={this.edit} className={"edit-bio-btn"}>Edit</button>
                </div>
                <div className={"bio-editor"}>
                    <form id="bioForm" onSubmit={this.submitBioEdit} className={"hidden"}>
                        <label htmlFor="bioInput">Update Bio</label>
                        <input type="text" id="bioInput"/>
                        <button id="btnSubmit" type="submit">
                            Update Bio
                        </button>
                    </form>
                </div>
            </div>
        );
    };
};

export default Bio;
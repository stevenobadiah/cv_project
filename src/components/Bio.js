import React, { Component } from "react";

class Bio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "This is your Bio Text",
            last_update: Date.now()
        };

        this.text = React.createRef();
        this.edit = this.edit.bind(this)
    }

    edit = () => {
        let form = document.getElementById("bioForm")
        form.classList = "unhidden"
    };

    submitBioEdit = (e) =>  {
        e.preventDefault();
        let form = document.getElementById("bioForm")
        this.setState({text: this.text.current.value, last_update: this.state.last_update}, () => {
            document.getElementById("bioText").textContent = this.text.current.value;
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
                        <input type="text" id="bioInput" defaultValue={text} ref={this.text}/>
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
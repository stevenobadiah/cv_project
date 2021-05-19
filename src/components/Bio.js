import React, { Component } from "react";

class Bio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "This is your Bio Text",
            last_update: Date.now(),
            button_text: "Edit"
        };

        this.text = React.createRef();
        this.edit = this.edit.bind(this)
    }

    edit = () => {
        if (this.state.button_text === "Edit") {
            document.getElementById("bioForm").classList = "unhidden"
            this.setState({button_text: "Cancel"})
        } else {
            document.getElementById("bioForm").classList = "hidden"
            this.setState({button_text: "Edit"})
        }
    };

    submitBioEdit = (e) =>  {
        e.preventDefault();
        this.setState({text: this.text.current.value, last_update: this.state.last_update}, () => {
            document.getElementById("bioText").textContent = this.text.current.value;
        });
        document.getElementById("bioForm").classList = "hidden"
        document.getElementById("btnToggleBioForm").innerHTML = "Edit"
    }

    render() {
        const { text, button_text } = this.state;
        return (
            <section className={"bio"}>
                <div id="bioDisplay">
                    <p id="bioText">{text}</p>
                    <button onClick={this.edit} id="btnToggleBioForm">{button_text}</button>
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
            </section>
        );
    };
};

export default Bio;
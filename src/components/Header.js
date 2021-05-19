import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      name: "Steven Obadiah",
      address: "2101 Legion Street",
      email: "stevenobadiah@gmail.com",
      mobile: "516-508-6190",
      last_update: Date.now(),
      button_text: "Edit"
    };

    this.name = React.createRef();
    this.address = React.createRef();
    this.email = React.createRef();
    this.mobile = React.createRef();
  }

  edit = () => {
    if (this.state.button_text === "Edit") {
        document.getElementById("headerForm").classList = "unhidden"
        this.setState({button_text: "Cancel"})
    } else {
        document.getElementById("headerForm").classList = "hidden"
        this.setState({button_text: "Edit"})
    }
  };

  submitHeaderEdit = (e) =>  {
    e.preventDefault();
    this.setState({name: this.name.current.value, address: this.address.current.value, email: this.email.current.value, mobile: this.mobile.current.value, last_update: this.state.last_update}, () => {});
    document.getElementById("headerForm").classList = "hidden"
    document.getElementById("btnToggleHeaderForm").innerHTML = "Edit"

  }

  render() {
    const { name, address, email, mobile, button_text } = this.state;
    return (
      <section className={"header"}>
          <div id="headerDisplay">
              <div id="headerFields">
                <h2 id="name">{name}</h2>
                <div className={"header-sub"}>
                  <span id="address">{address} | </span>
                  <span id="email">{email} | </span>
                  <span id="mobile">{mobile}</span>
                </div>
              </div>
              <button onClick={this.edit} id="btnToggleHeaderForm">{button_text}</button>
          </div>
          <div className={"header-editor"}>
              <form id="headerForm" onSubmit={this.submitHeaderEdit} className={"hidden"}>
                  <label htmlFor="nameInput">Name: </label>
                  <input type="text" id="nameInput" defaultValue={name} ref={this.name}/>
                  <label htmlFor="addressInput">Address: </label>
                  <input type="text" id="addressInput" defaultValue={address} ref={this.address}/>
                  <label htmlFor="emailInput">Email: </label>
                  <input type="text" id="emailInput" defaultValue={email} ref={this.email}/>
                  <label htmlFor="mobileInput">Mobile: </label>
                  <input type="text" id="mobileInput" defaultValue={mobile} ref={this.mobile}/>
                  <button id="btnSubmit" type="submit">
                      Update Header
                  </button>
              </form>
          </div>
      </section>
    );
  };
}

export default Header;
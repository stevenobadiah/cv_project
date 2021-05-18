import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      name: "Steven Obadiah",
      address: "2101 Legion Street",
      email: "stevenobadiah@gmail.com",
      mobile: "516-508-6190",
      last_update: Date.now()
    };

    this.name = React.createRef();
    this.address = React.createRef();
    this.email = React.createRef();
    this.mobile = React.createRef();
  }

  edit = () => {
    let form = document.getElementById("headerForm")
    form.classList = "unhidden"
  };

  submitHeaderEdit = (e) =>  {
    e.preventDefault();
    let form = document.getElementById("headerForm")
    let name = document.getElementById("name")
    let address = document.getElementById("address")
    let email = document.getElementById("email")
    let mobile = document.getElementById("mobile")
    this.setState({name: this.name.current.value, address: this.address.current.value, email: this.email.current.value, mobile: this.mobile.current.value, last_update: this.state.last_update}, () => {
        name.textContent = this.name.current.value
        address.textContent = this.address.current.value
        email.textContent = this.email.current.value
        mobile.textContent = this.mobile.current.value
    });
    form.classList = "hidden"
  }

  render() {
    const { name, address, email, mobile } = this.state;
    return (
      <div className={"header"}>
          <div className={"header-display"}>
              <p id="name">{name}</p>
              <p id="address">{address}</p>
              <p id="email">{email}</p>
              <p id="mobile">{mobile}</p>
              <button onClick={this.edit} className={"edit-header-btn"}>Edit</button>
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
      </div>
    );
  };
}

export default Header;
import './App.css';
import React, { Component } from "react";
import Bio from "./components/Bio";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skill from "./components/Skill";

class App extends Component {
  constructor() {
    super();

    this.state = {
      educations: [],
      experiences: [],
      skills: [],
      buttons: "Remove Buttons"
    };
  }

  toggleButtons = () => {
    //FIX THIS FUNCTIONALITY
    if (this.state.buttons === "Remove Buttons") {
      this.setState({buttons: "Display Buttons"})
    } else {
      this.setState({buttons: "Remove Buttons"})
    }
  }

  render() {
    const {buttons} = this.state

    return (
      <div>
        <header>
          <h1>CV Builder</h1>
          <button onClick={this.toggleButtons} id="btnToggleButtons" type="button">{buttons}</button>
        </header>
        <main>
          <Header/>
          <Bio/>
          <Education educations={this.educations}/>
          <Experience experiences={this.experiences}/>
          <Skill skills={this.skills}/>
        </main>
      </div>
    );
  }
}

export default App;
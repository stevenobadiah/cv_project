import './App.css';
import React, { Component } from "react";
import Bio from "./components/Bio";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
//import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      educations: [],
      experiences: [],
      skills: [],
    };
  }

  render() {

    return (
      <div>
        <Header/>
        <Bio/>
        <Education educations={this.educations}/>
        <Experience experiences={this.experiences}/>
        <Skill skills={this.skills}/>
      </div>
    );
  }
}

export default App;
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
    };
  }

  render() {

    return (
      <div>
        <header>
          <h1>CV Builder</h1>
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
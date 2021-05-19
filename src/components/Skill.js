import React, { Component } from "react";
import SkillFactory from "./SkillFactory";
import uniqid from "uniqid";

class Skill extends Component {
  constructor() {
    super();

    this.state = {
      skill: {
        text: '',
        id: uniqid()
      },
      skills: [],
      focusedId: '',
    };

    this.deleteSkill = this.deleteSkill.bind(this)
  }

  refreshInputs = () => {
    document.getElementById("skillInput").value = "";
  }

  closeForm = () => {
    this.refreshInputs()
    document.getElementById("skillForm").classList = "hidden"
    document.getElementById("btnAddSkill").classList = "unhidden"
    document.getElementById("btnSkillCancel").classList = "hidden"
  }

  addSkill = () => {
    document.getElementById("skillForm").classList = "unhidden"
    document.getElementById("btnSkillCancel").classList = "unhidden"
    document.getElementById("btnAddSkill").classList = "hidden"
    this.refreshInputs()
  };

  deleteSkill(id) {
    let newSkills = this.state.skills.filter(skill => (skill.id !== id));
    this.setState({skills: newSkills, buttonText: "Add Skill"})
    this.refreshInputs()
  };

  handleChange = (e) => {
    this.setState({
      skill: {
        text: document.getElementById("skillInput").value,
        id: this.state.skill.id,
      },
    });
  };

  onSubmitSkill = (e) => {
    e.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: {
        text: "",
        id: uniqid(),
      },
    });
    document.getElementById("skillForm").classList = "hidden"
    document.getElementById("btnSkillCancel").classList = "hidden"
    document.getElementById("btnAddSkill").classList = "unhidden"
  };

  render() {
    const { skill, skills } = this.state;

    return (
      <section>
        <div id="skillDisplay">
          <h3 className={"section-header"}>SKILLS</h3>
          <div id="skillFields">
            <SkillFactory skills={skills.sort(function(a,b){return a.text - b.text})} deleteSkill={this.deleteSkill}/>
          </div>
          <button onClick={this.addSkill} id="btnAddSkill">Add Skill</button>
          <button onClick={this.closeForm} id="btnSkillCancel" className="hidden">Cancel</button>
        </div>
        <div id="skillEditor">
          <form onSubmit={this.onSubmitSkill} id="skillForm" className="hidden">
            <label htmlFor="skillInput">Enter Skill</label>
            <input type="text" id="skillInput" onChange={this.handleChange} defaultValue={skill.text}/>

            <button id="btnSubmit" type="submit">
              Add Skill
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Skill;

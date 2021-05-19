import React, { Component } from "react";
import ExperienceFactory from "./ExperienceFactory";
import uniqid from "uniqid";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      experience: {
        company: '',
        position: '',
        description: '',
        start_year: '',
        end_year: '',
        id: uniqid(),
      },
      experiences: [],
      focusedId: '',
      buttonText: 'Add Experience'
    };

    this.editExperience = this.editExperience.bind(this)
    this.deleteExperience = this.deleteExperience.bind(this)
  }

  refreshInputs = () => {
    document.getElementById("companyInput").value = "";
    document.getElementById("positionInput").value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("startYearInput").value = "";
    document.getElementById("endYearInput").value = "";
  }

  closeForm = () => {
    this.refreshInputs()
    document.getElementById("experienceForm").classList = "hidden"
    document.getElementById("btnAddExperience").classList = "unhidden"
    document.getElementById("btnExperienceCancel").classList = "hidden"
  }

  addExperience = () => {
    document.getElementById("experienceForm").classList = "unhidden"
    document.getElementById("btnExperienceCancel").classList = "unhidden"
    document.getElementById("btnAddExperience").classList = "hidden"
    this.refreshInputs()
    this.setState({buttonText: "Add Experience"})
  };

  editExperience(id) {
    document.getElementById("experienceForm").classList = "unhidden"
    document.getElementById("btnExperienceCancel").classList = "unhidden"
    document.getElementById("btnAddExperience").classList = "hidden"
    let editExperience = this.state.experiences.find(experience => experience.id === id);
    this.setState({focusedId: editExperience.id, buttonText: "Edit"}, () => {
      document.getElementById("companyInput").value = editExperience.company;
      document.getElementById("positionInput").value = editExperience.position;
      document.getElementById("descriptionInput").value = editExperience.description;
      document.getElementById("startYearInput").value = editExperience.start_year;
      document.getElementById("endYearInput").value = editExperience.end_year;
    });
  };

  deleteExperience(id) {
    let newExperiences = this.state.experiences.filter(experience => (experience.id !== id));
    this.setState({experiences: newExperiences, buttonText: "Add Experience"})
    this.refreshInputs()
  };

  handleChange = (e) => {
    this.setState({
      experience: {
        company: document.getElementById("companyInput").value,
        position: document.getElementById("positionInput").value,
        description: document.getElementById("descriptionInput").value,
        start_year: document.getElementById("startYearInput").value,
        end_year: document.getElementById("endYearInput").value,
        id: this.state.experience.id,
      },
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    if (this.state.buttonText === "Edit") {
      this.setState({focusedId: this.state.focusedId}, () => {
        this.deleteExperience(this.state.focusedId)
      });
    }
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        company: '',
        position: '',
        description: '',
        start_year: '',
        end_year: '',
        id: uniqid()
      },
    });
    document.getElementById("experienceForm").classList = "hidden"
    document.getElementById("btnExperienceCancel").classList = "hidden"
    document.getElementById("btnAddExperience").classList = "unhidden"
  };

  render() {
    const { experience, experiences, buttonText } = this.state;

    return (
      <section>
        <div id="experienceDisplay">
          <h3 className={"section-header"}>EXPERIENCE</h3>
          <div id="experienceFields">
            <ExperienceFactory experiences={experiences.sort(function(a,b){return a.end_year - b.end_year})} editExperience={this.editExperience} deleteExperience={this.deleteExperience}/>
          </div>
          <button onClick={this.addExperience} id="btnAddExperience">Add Experience</button>
          <button onClick={this.closeForm} id="btnExperienceCancel" className="hidden">Cancel</button>
        </div>
        <div id="experienceEditor">
          <form onSubmit={this.onSubmitExperience} id="experienceForm" className="hidden">
            <label htmlFor="companyInput">Enter Company</label>
            <input type="text" id="companyInput" onChange={this.handleChange} defaultValue={experience.company}/>
            <label htmlFor="positionInput">Enter Position</label>
            <input type="text" id="positionInput" onChange={this.handleChange} defaultValue={experience.position}/>
            <label htmlFor="descriptionInput">Enter Job Description</label>
            <input type="text" id="descriptionInput" onChange={this.handleChange} defaultValue={experience.description}/>
            <label htmlFor="startYearInput">Enter Start Year</label>
            <input type="text" id="startYearInput" onChange={this.handleChange} defaultValue={experience.start_year}/>
            <label htmlFor="endYearInput">Enter End Year</label>
            <input type="text" id="endYearInput" onChange={this.handleChange} defaultValue={experience.end_year}/>

            <button id="btnSubmit" type="submit">
              {buttonText}
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Experience;

import React, { Component } from "react";
import EducationFactory from "./EducationFactory";
import uniqid from "uniqid";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      education: {
        university: '',
        degree: '',
        graduation_year: 2016,
        id: uniqid(),
      },
      educations: [],
      focusedId: '',
      buttonText: 'Add Education'
    };

    this.editEducation = this.editEducation.bind(this)
    this.deleteEducation = this.deleteEducation.bind(this)
  }

  refreshInputs = () => {
    document.getElementById("universityInput").value = "";
    document.getElementById("degreeInput").value = "";
    document.getElementById("graduationYearInput").value = "";
  }

  closeForm = () => {
    this.refreshInputs()
    document.getElementById("educationForm").classList = "hidden"
    document.getElementById("btnAddEducation").classList = "unhidden"
    document.getElementById("btnEducationCancel").classList = "hidden"
  }

  addEducation = () => {
    document.getElementById("educationForm").classList = "unhidden"
    document.getElementById("btnEducationCancel").classList = "unhidden"
    document.getElementById("btnAddEducation").classList = "hidden"
    this.refreshInputs()
    this.setState({buttonText: "Add Education"})
  };

  editEducation(id) {
    document.getElementById("educationForm").classList = "unhidden"
    document.getElementById("btnEducationCancel").classList = "unhidden"
    document.getElementById("btnAddEducation").classList = "hidden"
    let editEducation = this.state.educations.find(education => education.id === id);
    this.setState({focusedId: editEducation.id, buttonText: "Edit"}, () => {
      document.getElementById("universityInput").value = editEducation.university;
      document.getElementById("degreeInput").value = editEducation.degree;
      document.getElementById("graduationYearInput").value = editEducation.graduation_year;
    });
  };

  deleteEducation(id) {
    let newEducations = this.state.educations.filter(education => (education.id !== id));
    this.setState({educations: newEducations, buttonText: "Add Education"})
    this.refreshInputs()
  };

  handleChange = (e) => {
    this.setState({
      education: {
        university: document.getElementById("universityInput").value,
        degree: document.getElementById("degreeInput").value,
        graduation_year: document.getElementById("graduationYearInput").value,
        id: this.state.education.id,
      },
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    if (this.state.buttonText === "Edit") {
      this.setState({focusedId: this.state.focusedId}, () => {
        this.deleteEducation(this.state.focusedId)
      });
    }
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        university: "",
        degree: "",
        graduation_year: "2016",
        id: uniqid(),
      },
    });
    document.getElementById("educationForm").classList = "hidden"
    document.getElementById("btnEducationCancel").classList = "hidden"
    document.getElementById("btnAddEducation").classList = "unhidden"
  };

  render() {
    const { education, educations, buttonText } = this.state;

    return (
      <section>
        <div id="educationDisplay">
          <h3 className={"section-header"}>EDUCATION</h3>
          <div id="educationFields">
            <EducationFactory educations={educations.sort(function(a,b){return a.graduation_year - b.graduation_year})} editEducation={this.editEducation} deleteEducation={this.deleteEducation}/>
          </div>
          <button onClick={this.addEducation} id="btnAddEducation">Add Education</button>
          <button onClick={this.closeForm} id="btnEducationCancel" className="hidden">Cancel</button>
        </div>
        <div id="educationEditor">
          <form onSubmit={this.onSubmitEducation} id="educationForm" className="hidden">
            <label htmlFor="universityInput">Enter University</label>
            <input type="text" id="universityInput" onChange={this.handleChange} defaultValue={education.university}/>
            <label htmlFor="degreeInput">Enter Degree</label>
            <input type="text" id="degreeInput" onChange={this.handleChange} defaultValue={education.degree}/>
            <label htmlFor="graduationYearInput">Enter Graduation Year</label>
            <input type="text" id="graduationYearInput" onChange={this.handleChange} defaultValue={education.graduation_year}/>

            <button id="btnSubmit" type="submit">
              {buttonText}
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Education;

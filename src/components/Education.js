import React, { Component } from "react";
import EducationFactory from "./components/EducationFactory";
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
    };

    this.editEducation = this.editEducation.bind(this)
    this.deleteEducation = this.deleteEducation.bind(this)
  }

  editEducation(id) {
    let editEducation = this.state.educations.find(education => education.id === id);
    document.getElementById("btnSubmit").innerHTML = "Edit";
    this.setState({focusedId: editEducation.id}, () => {
      document.getElementById("nameInput").value = editEducation.name;
      document.getElementById("addressInput").value = editEducation.address;
      document.getElementById("emailInput").value = editEducation.email;
      document.getElementById("mobileInput").value = editEducation.mobile;
    });
  };

  deleteEducation(id) {
    let newEducations = this.state.educations.filter(education => (education.id !== id));
    this.setState({educations: newEducations})
    document.getElementById("btnSubmit").innerHTML = "Add Education"
  };

  handleChange = (e) => {
    if (document.getElementById("btnSubmit").innerHTML === "Edit") {
      this.setState({
        education: {
          university: document.getElementById("universityInput").value,
          degree: document.getElementById("degreeInput").value,
          graduation_year: document.getElementById("graduationYearInput").value,
          id: this.state.education.id,
        },
      });
    } else {
      this.setState({
        education: {
          //THESE ARE SUPPOSED TO BE TARGET VALUE, BUT THERE'S THREE
          //university: e.target.value,
          university: document.getElementById("universityInput").value,
          degree: document.getElementById("degreeInput").value,
          graduation_year: document.getElementById("graduationYearInput").value,
          id: this.state.education.id,
        },
      });
    }
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    if (document.getElementById("btnSubmit").innerHTML === "Edit") {
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
  };

  render() {
    const { education, educations } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitEducation}>
          <label htmlFor="universityInput">Enter University</label>
          <input type="text" id="universityInput" onChange={this.handleChange} defaultValue={education.university}/>
          <label htmlFor="degreeInput">Enter Degree</label>
          <input type="text" id="degreeInput" onChange={this.handleChange} defaultValue={education.degree}/>
          <label htmlFor="graduationYearInput">Enter Graduation Year</label>
          <input type="text" id="graduationYearInput" onChange={this.handleChange} defaultValue={education.graduation_year}/>

          <button id="btnSubmit" type="submit">
            Add Education
          </button>
        </form>
        <EducationFactory educations={educations.sort(function(a,b){return a.graduation_year - b.graduation_year})} editEducation={this.editEducation} deleteEducation={this.deleteEducation}/>
      </div>
    );
  }
}

export default Education;

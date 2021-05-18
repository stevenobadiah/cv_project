import React, { Component } from "react";

class EducationFactory extends Component {

    render() {
        const { educations, editEducation, deleteEducation } = this.props;
        return (
            <ul>
            {educations.map((education) => {
                return (
                    <li key={education.id}>
                        <span>{education.count}: {education.text}</span>
                        <button onClick={() => editEducation(education.id)} className={"edit" + education.id}>Edit</button>
                        <button onClick={() => deleteEducation(education.id)} className={"delete" + education.id}>Delete</button>
                    </li>
                );
            })}
            </ul>
        );
    };
};

export default EducationFactory;
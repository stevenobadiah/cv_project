import React, { Component } from "react";

class ExperienceFactory extends Component {

    render() {
        const { experiences, editExperience, deleteExperience } = this.props;
        return (
            <ul>
            {experiences.map((experience) => {
                return (
                    <li key={experience.id}>
                        <span className="experience-company">{experience.company}</span>
                        <span className={"experience-date-range"}>
                            <span>{experience.start_year} - </span>
                            <span>{experience.end_year}</span>
                        </span>
                        <p>{experience.position}</p>
                        <p>{experience.description}</p>
                        <button onClick={() => editExperience(experience.id)} className={"edit" + experience.id}>Edit</button>
                        <button onClick={() => deleteExperience(experience.id)} className={"delete" + experience.id}>Delete</button>
                    </li>
                );
            })}
            </ul>
        );
    };
};

export default ExperienceFactory;
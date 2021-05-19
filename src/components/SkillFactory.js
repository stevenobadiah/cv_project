import React, { Component } from "react";

class SkillFactory extends Component {

    render() {
        const { skills, deleteSkill } = this.props;
        return (
            <ul>
            {skills.map((skill) => {
                return (
                    <li key={skill.id}>
                        <p>{skill.text}</p>
                        <button onClick={() => deleteSkill(skill.id)} className={"delete" + skill.id}>Delete</button>
                    </li>
                );
            })}
            </ul>
        );
    };
};

export default SkillFactory;
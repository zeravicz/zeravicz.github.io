import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var qualifications = this.props.data.qualifications.map(function (
        qualification
      ) {
        return (
          <div key={qualification.organization}>
            <h3>{qualification.organization}</h3>
            <p className="info">
              {qualification.qualification} <span></span>
              <em className="date">{`(${qualification.dateReceived})`}</em>
            </p>
            {qualification.description ? (
              <p>{qualification.description}</p>
            ) : (
              <p>
                <a href={qualification.link}>{qualification.linkText}</a>
              </p>
            )}
          </div>
        );
      });
      var workLength = this.props.data.work.length;
      var work = this.props.data.work.map(function (work, i) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span></span> <em className="date">{work.years}</em>
            </p>
            {Array.isArray(work.description) ? (
              work.description.map((_, i) => (
                <div key={`${work.company} job description ${i}`}>
                  &bull; {_}
                </div>
              ))
            ) : (
              <p>{work.description}</p>
            )}
            {i !== workLength - 1 && <br />}
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Qualifications</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{qualifications}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;

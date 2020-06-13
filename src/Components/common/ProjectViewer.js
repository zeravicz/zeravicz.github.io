import React, { useEffect } from "react";
import Modal from "react-modal";
import noScroll from "no-scroll";
import css from "./ProjectViewer.module.css";

const ProjectViewer = ({ title, open, toggleModal, achievements }) => {
  const style = {
    content: {
      // top                   : '50%',
      // left                  : '50%',
      // right                 : 'auto',
      // bottom                : 'auto',
      // marginRight           : '-50%',
      // transform             : 'translate(-50%, -50%)'
      padding: "50px",
    },
  };

  const achievementList =
    achievements &&
    achievements.map((achievement, i) => {
      return (
        <div key={achievement.title} className="projectViewer">
          <div className="projectViewer__achievement_title">
            <h3>{achievement.title}</h3>
            <span></span>
            <em className="date">{achievement.when}</em>
          </div>
          <div className="projectViewer__achievement_title">
            <img
              alt={`Image for ${achievement.title}`}
              src={"images/portfolio/" + achievement.image}
            />
            <span></span>
            <span></span>
            <span></span>
            {Array.isArray(achievement.description) ? (
              achievement.description.map((_) => <div>&bull; {_}</div>)
            ) : (
              <p>{achievement.description}</p>
            )}
            {i !== achievement.Length - 1 && <br />}
          </div>
        </div>
      );
    });

  useEffect(() => {
    if (open) {
      noScroll.on();
    }

    return () => noScroll.off();
  });
  return (
    <section id="projectView">
      <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // onAfterOpen={() => (document.body.style.overflow = "hidden")}
        // OnRequestClose={() => document.body.removeAttribute("style")}
        style={style}
        contentLabel="Example Modal"
      >
        <div id="return" style={{ cursor: "pointer" }}>
          <a className="smoothscroll" title="Return to website">
            <i className="icon-left-circle" onClick={() => toggleModal()}></i>
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{title}</h1>
        </div>
        <section id="resume">
          <div className="nine columns main-col">{achievementList}</div>
        </section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => toggleModal()}>Close</button>
        </div>
      </Modal>
    </section>
  );
};

export default ProjectViewer;

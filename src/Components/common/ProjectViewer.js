import React, { useEffect } from "react";
import Modal from "react-modal";
import noScroll from "no-scroll";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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

  const SectionAchievementList = ({ sectionAchievements }) => {
    return (
      sectionAchievements &&
      sectionAchievements.map((sectionAchievement, i) => {
        return (
          <div key={sectionAchievement.title} className="projectViewer">
            <div className="projectViewer__sectionAchievementTitle">
              <h3>{sectionAchievement.title}</h3>
              <span></span>
              <em className="date">{sectionAchievement.when}</em>
            </div>
            <div className="projectViewer__sectionAchievement">
              <img
                alt={`Image for ${sectionAchievement.title}`}
                src={"images/portfolio/" + sectionAchievement.image}
              />
              {Array.isArray(sectionAchievement.description) ? (
                sectionAchievement.description.map((_) => <div>&bull; {_}</div>)
              ) : (
                <p>{sectionAchievement.description}</p>
              )}
              {i !== sectionAchievement.Length - 1 && <br />}
            </div>
          </div>
        );
      })
    );
  };

  useEffect(() => {
    if (open) {
      noScroll.on();
    }

    return () => noScroll.off();
  });
  return (
    <section id="projectView">
      <Modal isOpen={open} style={style}>
        <div id="return" style={{ cursor: "pointer" }}>
          <a className="smoothscroll" title="Return to website">
            <i className="icon-left-circle" onClick={() => toggleModal()}></i>
          </a>
        </div>

        <div className="projectViewer__title">
          <h1>{title}</h1>
        </div>
        <section id="resume">
          <div className="nine columns main-col">
            <Tabs>
              <TabList>
                {achievements.map((_) => (
                  <Tab key={_.sectionTitle}>{_.sectionTitle}</Tab>
                ))}
              </TabList>
              {achievements.map((_) => (
                <TabPanel key={_.sectionTitle + " achievements"}>
                  <SectionAchievementList
                    sectionAchievements={_.sectionAchievements}
                  />
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </section>
        <div className="projectViewer__closeButton">
          <button onClick={() => toggleModal()}>Close</button>
        </div>
      </Modal>
    </section>
  );
};

export default ProjectViewer;

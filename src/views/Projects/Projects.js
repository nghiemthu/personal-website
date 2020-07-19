import React, { useEffect, useState, useLayoutEffect } from "react";
import Grid from "components/Grid/Grid";
import styles from "./Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faGlobe, faMouse } from "@fortawesome/free-solid-svg-icons";
import OverviewBlock from "./OverviewBlock/OverviewBlock";
import ProjectCard from "./ProjectCard/ProjectCard";
import projects from "./projectData";
import useFilteredItems from "utils/useFilteredItems";
import SelectableTag from "components/SelectableTag/SelectableTag";
import cn from "classnames";

export function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const Projects = () => {
  const { toggleTag, getFilteredItems, selectedTags } = useFilteredItems({
    items: projects,
  });

  const [welcomeNotificationOpen, setWelcomeNotificationOpen] = useState(false);

  const [firstProjectHover, setFirstProjectHover] = useState(false);

  const [scrollY, setScrollY] = useState(10);

  useLayoutEffect(() => {
    const template = document.getElementById("template");
    const handleScroll = () => {
      setScrollY(
        Math.round((template.scrollTop / template.scrollHeight) * 2 * 100 + 10)
      );
    };

    template.addEventListener("scroll", debounce(handleScroll));
    return () => template.removeEventListener("scroll", debounce(handleScroll));
  }, []);

  useEffect(() => {
    setWelcomeNotificationOpen(true);

    setTimeout(function () {
      setWelcomeNotificationOpen(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.Projects}>
      <div
        className={styles.Projects_scrollIndicator}
        style={{ top: `${scrollY}%` }}
      >
        {`${scrollY + 4}%`}
      </div>
      <div className={styles.Projects__overview}>
        <div
          className={cn(styles.Projects_notification, {
            [styles.Projects_notification__open]: welcomeNotificationOpen,
          })}
        >
          Welcome to my projects, select more to see the preview
        </div>

        <div
          className={cn(styles.Projects_notification, {
            [styles.Projects_notification__open]: firstProjectHover,
          })}
        >
          You are looking at NightLife, it's a full-stack application using
          React and Node.js
        </div>

        <h4>Overview</h4>

        <div className={styles.Projects__overview__content}>
          <Grid gapSize="sm">
            <OverviewBlock
              icon={
                <FontAwesomeIcon
                  className={styles.Template__sideNavigation__tabs__icon}
                  icon={faGlobe}
                />
              }
              number={12}
              label="Webs"
              index={1}
            />

            <OverviewBlock
              icon={
                <FontAwesomeIcon
                  className={styles.Template__sideNavigation__tabs__icon}
                  icon={faMouse}
                />
              }
              number={3}
              label="Designs"
              index={2}
            />

            <OverviewBlock
              icon={
                <FontAwesomeIcon
                  className={styles.Template__sideNavigation__tabs__icon}
                  icon={faGamepad}
                />
              }
              number={4}
              label="Games"
              index={3}
            />
          </Grid>
        </div>
      </div>

      <div className={styles.Projects__projectList}>
        <h4 className={styles.Projects__projectList__heading}>
          Featured projects
        </h4>

        <div className={styles.Projects__projectList__tags}>
          {[
            { value: "React", label: "React" },
            { value: "Redux", label: "Redux" },
            { value: "Javascript", label: "Javascript" },
            { value: "jQuery", label: "jQuery" },
            { value: "Unity", label: "Unity" },
            { value: "C#", label: "C#" },
          ].map(({ value, label }) => (
            <SelectableTag
              key={value}
              selected={selectedTags.includes(value)}
              onClick={() => toggleTag(value)}
              label={label}
            />
          ))}
        </div>

        <Grid gapSize="lg">
          {getFilteredItems().map((project, key) => (
            <ProjectCard
              project={project}
              key={key}
              onMouseOver={() => {
                if (key === 0) {
                  setFirstProjectHover(true);
                }
              }}
              onMouseOut={() => {
                if (key === 0) {
                  setFirstProjectHover(false);
                }
              }}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;

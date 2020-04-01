import React from "react";
import Grid from "components/Grid/Grid";
import styles from "./Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faGlobe, faMouse } from "@fortawesome/free-solid-svg-icons";
import OverviewBlock from "./OverviewBlock/OverviewBlock";
import ProjectCard from "./ProjectCard/ProjectCard";
import projects from "./projectData";
import useFilteredItems from "utils/useFilteredItems";
import SelectableTag from "components/SelectableTag/SelectableTag";

const Projects = () => {
  const { toggleTag, getFilteredItems, selectedTags } = useFilteredItems({
    items: projects
  });

  return (
    <>
      <div className={styles.Projects__overview}>
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
            { value: "C#", label: "C#" }
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
            <ProjectCard project={project} key={key} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Projects;

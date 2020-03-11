import React from "react";
import Grid from "components/Grid/Grid";
import styles from "./Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faGlobe, faMouse } from "@fortawesome/free-solid-svg-icons";
import OverviewBlock from "./OverviewBlock/OverviewBlock";

const Projects = () => {
  return (
    <>
      <div className={styles.Projects__overview}>
        <h4>Overview</h4>

        <div className={styles.Projects__overview__content}>
          <Grid>
            <OverviewBlock
              icon={
                <FontAwesomeIcon
                  className={styles.Template__sideNavigation__tabs__icon}
                  icon={faGlobe}
                />
              }
              number={1}
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
        <h4>Projects</h4>
        <Grid>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Grid>
      </div>
    </>
  );
};

export default Projects;

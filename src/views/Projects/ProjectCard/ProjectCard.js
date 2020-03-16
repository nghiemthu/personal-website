import React from "react";
import styles from "./ProjectCard.module.scss";
import classnames from "classnames";

const ProjectCard = ({
  project: { projectName, description, level, skills, group }
}) => {
  const isWeb = group === "Web";
  const isDesign = group === "Design";
  const isGame = group === "Game";

  return (
    <div
      className={classnames([
        styles.ProjectCard,
        {
          [styles.ProjectCard_color1]: isWeb
        },
        {
          [styles.ProjectCard_color2]: isDesign
        },
        {
          [styles.ProjectCard_color3]: isGame
        }
      ])}
    >
      <div
        className={classnames(
          styles.ProjectCard__group,
          {
            [styles.ProjectCard__group_color1]: isWeb
          },
          {
            [styles.ProjectCard__group_color2]: isDesign
          },
          {
            [styles.ProjectCard__group_color3]: isGame
          }
        )}
      >
        {group}
      </div>

      <h4 className={styles.ProjectCard__name}>{projectName}</h4>

      <div className={styles.ProjectCard__tagWrapper}>
        {skills.map(skill => (
          <span className={styles.ProjectCard__tagWrapper__tag}>{skill}</span>
        ))}
      </div>

      <p className={styles.ProjectCard__description}>{description}</p>

      <div className={styles.ProjectCard__footer}>
        <div>{level}</div>
      </div>

      <div
        className={classnames([
          styles.ProjectCard__buttonWrapper,
          {
            [styles.ProjectCard__buttonWrapper_color1]: isWeb
          },
          {
            [styles.ProjectCard__buttonWrapper_color2]: isDesign
          },
          {
            [styles.ProjectCard__buttonWrapper_color3]: isGame
          }
        ])}
      >
        <div className={styles.ProjectCard__buttonWrapper__boxAbove} />
        <div className={styles.ProjectCard__buttonWrapper__boxBelow} />
        <button>More</button>
      </div>

      {/* <div
        className={classnames([
          styles.ProjectCard__progress,
          {
            [styles.ProjectCard__progress_color1]: isWeb
          },
          {
            [styles.ProjectCard__progress_color2]: isDesign
          },
          {
            [styles.ProjectCard__progress_color3]: isGame
          }
        ])}
      >
        <div />
      </div> */}
    </div>
  );
};

export default ProjectCard;

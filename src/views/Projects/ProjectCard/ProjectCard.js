import React from "react";
import styles from "./ProjectCard.module.scss";
import classnames from "classnames";

const ProjectCard = ({
  project: { projectName, description, level, tags, group, imgSrc }
}) => {
  const isWeb = group === "Web";
  const isDesign = group === "Design";
  const isGame = group === "Game";

  return (
    <div
      className={classnames([
        styles.ProjectCard,
        { [styles.ProjectCard_imageSpace]: !!imgSrc }
      ])}
    >
      <div
        className={classnames([
          styles.ProjectCard__wrapper,
          {
            [styles.ProjectCard_color1]: isWeb
          },
          {
            [styles.ProjectCard_color2]: isDesign
          },
          {
            [styles.ProjectCard_color3]: isGame
          },
          { [styles.ProjectCard__wrapper_imageSpace]: !!imgSrc }
        ])}
      >
        {imgSrc && (
          <div className={styles.ProjectCard__image}>
            <img src={imgSrc} alt={projectName} />
          </div>
        )}

        <h3 className={styles.ProjectCard__name}>{projectName}</h3>

        <div className={styles.ProjectCard__tagWrapper}>
          {tags.map(tag => (
            <span className={styles.ProjectCard__tagWrapper__tag} key={tag}>
              {tag}
            </span>
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
    </div>
  );
};

export default ProjectCard;

import React from "react";
import styles from "./Template.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import {
  faHome,
  faLaptopCode,
  faCode,
  faPen,
  faImages,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const TemplateTab = ({ to, label, faIcon, active }) => {
  return (
    <Link
      to={to}
      className={active && styles.Template__sideNavigation__tabs_active}
    >
      <FontAwesomeIcon
        className={styles.Template__sideNavigation__tabs__icon}
        icon={faIcon}
      />{" "}
      {label}
    </Link>
  );
};

const Template = ({ children }) => {
  return (
    <div className={styles.Template}>
      <div className={styles.Template__sideNavigation}>
        <div className={styles.Template__sideNavigation__logo}>Tuu.</div>

        <div className={styles.Template__sideNavigation__tabs}>
          <TemplateTab to="/" label="Home" faIcon={faHome} active />

          <TemplateTab to="/projects" label="Projects" faIcon={faLaptopCode} />

          <TemplateTab to="/skills" label="Skills" faIcon={faCode} />

          <TemplateTab to="/gallery" label="Gallery" faIcon={faImages} />

          <TemplateTab to="/blogs" label="Blogs" faIcon={faPen} />

          <TemplateTab to="/contact" label="Contact" faIcon={faEnvelope} />
        </div>

        <div className={styles.Template__sideNavigation__flexSpacing} />

        <div className={styles.Template__sideNavigation__socials}>
          <div className={styles.Template__sideNavigation__socials__button}>
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className={styles.Template__sideNavigation__socials__button}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className={styles.Template__sideNavigation__socials__button}>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>

      <div className={styles.Template__content}>{children}</div>
    </div>
  );
};

export default Template;

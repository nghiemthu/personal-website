import React from "react";
import styles from "./Template.module.scss";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";

import {
  faHome,
  faLaptopCode,
  faCode,
  faPen,
  faImages,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import thunghiemPhoto from "resources/images/homepage/thunghiem.png";

const TemplateTab = ({ to, label, faIcon }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link
      to={to}
      className={classNames(styles.Template__sideNavigation__tabs__tab, {
        [styles.Template__sideNavigation__tabs__tab_active]: active
      })}
    >
      {active && (
        <>
          <div
            className={styles.Template__sideNavigation__tabs__tab__boxAbove}
          />
          <div
            className={styles.Template__sideNavigation__tabs__tab__boxBelow}
          />
        </>
      )}

      <FontAwesomeIcon
        className={styles.Template__sideNavigation__tabs__icon}
        icon={faIcon}
      />
      {/* {label} */}
    </Link>
  );
};

const Template = ({ children }) => {
  return (
    <div className={styles.Template}>
      <div className={styles.Template__sideNavigation}>
        <div className={styles.Template__sideNavigation__logo}>Tuu.</div>

        <div className={styles.Template__sideNavigation__tabs}>
          <TemplateTab to="/" label="Home" faIcon={faHome} />

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

      <div className={styles.Template__scrollable}>
        <div className={styles.Template__content}>
          <div className={styles.Template__getInTouch}>
            <img src={thunghiemPhoto} alt="thunghiem" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Template;

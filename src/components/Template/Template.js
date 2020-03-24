import React, { useState } from "react";
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
  faEnvelope,
  faChevronRight,
  faChevronLeft
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
  const [navigationHidden, setNavigationHidden] = useState(true);

  return (
    <div className={styles.Template}>
      <div
        className={classNames([
          styles.Template__sideNavigation,
          { [styles.Template__sideNavigation_hidden]: navigationHidden }
        ])}
      >
        <div
          className={styles.Template__sideNavigation__bars}
          onClick={() => setNavigationHidden(!navigationHidden)}
        >
          <FontAwesomeIcon
            icon={navigationHidden ? faChevronRight : faChevronLeft}
          />
        </div>

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
          <div className={styles.Template__content__top}>
            <div className={styles.Template__content__top__emptySpace} />

            <div className={styles.Template__content__top__getInTouch}>
              <img src={thunghiemPhoto} alt="thunghiem" />
            </div>
          </div>

          <div className={styles.Template__content__children}>{children}</div>

          <div className={styles.Template__content__footer}>
            <div className={styles.Template__content__footer__divider} />
            <div className={styles.Template__content__footer__copyright}>
              Copyright © 2020 Thu Nghiem
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;

import React from "react";
import styles from "./Skills.module.scss";
import thunghiemPhoto from "resources/images/homepage/thunghiem.png";
import Grid from "components/Grid/Grid";
import AbilityCard from "./AbilityCard/AbilityCard";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faVuejs,
  faSass,
  faBootstrap,
  faUnity,
  faNodeJs,
  faJava,
  faFigma
} from "@fortawesome/free-brands-svg-icons";
import { faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import LanguageCard from "./LanguageCard/LanguageCard";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Skills = () => {
  return (
    <div className={styles.Skills}>
      <div className={styles.Skills__intro}>
        <div className={styles.Skills__intro__img}>
          <img src={thunghiemPhoto} alt="thunghiem" />
        </div>
        <h3>Thu Nghiem Dinh</h3>
        <div>Software developer</div>
      </div>

      <div className={styles.Skills__skills}>
        <h4>Abilities</h4>
        <Grid>
          <AbilityCard
            technologies={[
              faHtml5,
              faCss3,
              faJs,
              faSass,
              faReact,
              faVuejs,
              faBootstrap
            ]}
            label="Creating Websites"
            imgScr="https://images.unsplash.com/photo-1539278670307-a69d04dc8a75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />

          <AbilityCard
            label="Designing Websites"
            imgScr="https://images.unsplash.com/photo-1542837336-d14bdf342f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=994&q=80"
            technologies={[faFigma]}
          />

          <AbilityCard
            label="Creating Games"
            imgScr="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            technologies={[faUnity, faJs]}
          />

          <AbilityCard
            label="Creating APIs"
            imgScr="https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            technologies={[faNodeJs, faJs, faJava]}
          />

          <AbilityCard
            label="Creating Mobile Applications"
            imgScr="https://images.unsplash.com/photo-1519124080359-bfc4bb96f9aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            technologies={[faHtml5, faCss3, faJs, faSass, faReact, faCss3]}
          />

          <AbilityCard
            label="Creating Presentations"
            imgScr="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"
            technologies={[faFilePowerpoint]}
          />
        </Grid>
      </div>

      <div className={styles.Skills__languages}>
        <h4>Languages</h4>

        <Grid>
          <LanguageCard
            language="Vietnamese"
            level="Native"
            imgScr="https://images.unsplash.com/photo-1521993117367-b7f70ccd029d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />

          <LanguageCard
            language="English"
            level="Professional working proficiency"
            imgScr="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />

          <LanguageCard
            language="Finnish"
            level="Elementary proficiency"
            imgScr="https://images.unsplash.com/photo-1522885147691-06d859633fb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
        </Grid>
      </div>

      <div className={styles.Skills__experiences}>
        <h4>Experiences</h4>
        <Grid columns={2}>
          <ExperienceCard
            title="Frontend Developer"
            company="Telia Finland"
            duration="Jun 2018 – Present"
            location="Helsinki, Southern Finland, Finland"
            imgScr="https://media-exp1.licdn.com/dms/image/C4E0BAQFbBsIWNqaqiw/company-logo_100_100/0?e=1593043200&v=beta&t=H-2A8A_23ocXmF4fzw5AG0RhpMcFGR5G3YCBKzReFR0"
          />

          <ExperienceCard
            title="Frontend Developer"
            company="Jobilla"
            duration="Dec 2017 – May 2018"
            location="Helsinki, Southern Finland, Finland"
            imgScr="https://media-exp1.licdn.com/dms/image/C4D0BAQH35EhcqjwOGg/company-logo_100_100/0?e=1593043200&v=beta&t=ZSEZXmRJAnCcuFzeVMhTnRUqxdqK2nA7KV1cda9MoOs"
          />

          <ExperienceCard
            title="Game Programmer"
            company="Stupid Stupid Games"
            duration="Jan 2017 – Apr 2017"
            location="Helsinki, Southern Finland, Finland"
            imgScr="https://media-exp1.licdn.com/dms/image/C560BAQEVNUgLPshfqQ/company-logo_100_100/0?e=1593043200&v=beta&t=qyQuvY3DDPMJ8u4fxW7Uo196kZ0DKgOD3qk-BdTkHpU"
          />
        </Grid>
      </div>
    </div>
  );
};

export default Skills;

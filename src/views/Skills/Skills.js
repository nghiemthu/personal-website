import React, { useState } from "react";
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
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import LanguageCard from "./LanguageCard/LanguageCard";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Input from "components/Input/Input";
import { useForm } from "react-hook-form";
import cn from "classnames";

const defaultExperiences = [
  {
    title: "Founder",
    company: "Dev Challenges",
    duration: "Jun 2020 – Present",
    location: "Helsinki, Southern Finland, Finland",
    imgScr:
      "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/logo_2.png?alt=media&token=a5155688-fbfa-4ece-b692-fe2326db7741",
  },
  {
    title: "Software Engineer",
    company: "Telia Finland",
    duration: "Jun 2018 – Present",
    location: "Helsinki, Southern Finland, Finland",
    imgScr:
      "https://upload.wikimedia.org/wikipedia/fi/thumb/2/23/Telia_logo.svg/1200px-Telia_logo.svg.png",
  },
  {
    title: "Frontend Developer",
    company: "Jobilla",
    duration: "Dec 2017 – May 2018",
    location: "Helsinki, Southern Finland, Finland",
    imgScr: "https://jobilla.com/assets/jobilla-logos/jobilla_logo_color.png",
  },
  {
    title: "Game Programmer",
    company: "Stupid Stupid Games",
    duration: "Jan 2017 – Apr 2017",
    location: "Helsinki, Southern Finland, Finland",
    imgScr:
      "https://www.epressi.com/media/userfiles/106204/1520506387/stupidstupidgames_logo.png",
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState(defaultExperiences);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setExperiences([data, ...experiences.slice(0, 3)]);
    setOpen(false);
  };

  return (
    <div className={styles.Skills}>
      <div
        className={cn(styles.Skills_addForm, {
          [styles.Skills_addForm__open]: open,
        })}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="title"
            label="Title"
            type="text"
            name="title"
            inputRef={register}
            placeholder="Your title.."
            maxLength="25"
            required
          />

          <Input
            inputRef={register}
            id="company"
            label="Company"
            type="text"
            name="company"
            placeholder="Your company.."
            maxLength="25"
            required
          />

          <Input
            inputRef={register}
            id="duration"
            label="Duration"
            type="text"
            name="duration"
            placeholder="Duration.."
            maxLength="25"
            required
          />

          <Input
            id="location"
            label="Location"
            type="text"
            name="location"
            placeholder="Location.."
            maxLength="25"
            required
            inputRef={register}
          />

          <Input
            inputRef={register}
            id="imgScr"
            label="Image URL"
            type="text"
            name="imgScr"
            placeholder="Image Url.."
            maxLength="100"
            required
          />

          <button type="submit">Submit</button>

          <button
            type="button"
            onClick={() => setOpen(false)}
            style={{ marginLeft: "12px", backgroundColor: "#888" }}
          >
            cancel
          </button>
        </form>
      </div>
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
              faBootstrap,
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
        <div className={styles.Skills__experiences_heading}>
          <h4>Experiences</h4>
          <div className={styles.Skills__experiences_heading_space} />
          <button onClick={() => setOpen(true)}>Add</button>
        </div>

        <Grid columns={2}>
          {experiences.map(({ title, company, duration, location, imgScr }) => (
            <ExperienceCard
              title={title}
              company={company}
              duration={duration}
              location={location}
              imgScr={imgScr}
              key={title}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;

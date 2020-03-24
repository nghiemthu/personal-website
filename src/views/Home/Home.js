import React from "react";
import styles from "./Home.module.scss";
import HomeCard from "./HomeCard/HomeCard";
import Grid from "components/Grid/Grid";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Home__main}>
        <div className={styles.Home__main__intro}>
          <h3 className={styles.Home__main__intro__heading}>
            Hi there ! I am Thu
          </h3>
          <h4 className={styles.Home__main__intro__title}>
            A Software Developer
          </h4>

          <p className={styles.Home__main__intro__description}>
            Working with website is my daily job, it is also my hobby and my
            ambition. My goal is to give users great human-centered experiences
            with beautiful and user friendly websites
          </p>
        </div>
        <div className={styles.Home__main__intro__img}>
          <img
            alt="home"
            src="https://assets-ouch.icons8.com/thumb/732/4f6fdc97-a390-4d76-9448-2a778bf93c8c.png"
          />
        </div>
      </div>

      <div className={styles.Home__motivations}>
        <h4 className={styles.Home__heading}>What motivates me</h4>

        <Grid gapSize="lg">
          <HomeCard
            title="Web Developnent"
            description="Nunc quis neque a neque venenatis tristique. Sed a facilisis diam.
            Mauris a ligula felis"
            imgSrc="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          />
          <HomeCard
            title="Web Design"
            description="Nunc quis neque a neque venenatis tristique. Sed a facilisis diam.
            Mauris a ligula felis"
            imgSrc="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
          <HomeCard
            title="Game Development"
            description="Nunc quis neque a neque venenatis tristique. Sed a facilisis diam.
            Mauris a ligula felis"
            imgSrc="https://images.unsplash.com/photo-1567391454009-0894f63e5550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
        </Grid>
      </div>

      <div className={styles.Home__moreAboutMe}>
        <h4 className={styles.Home__heading}>More about me</h4>

        <Grid gapSize="lg">
          <HomeCard
            title="Cooking"
            description="Nunc quis neque a neque venenatis tristique. Sed a facilisis diam.
            Mauris a ligula felis"
            imgSrc="https://images.unsplash.com/photo-1512200937580-db88be2072a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />

          <HomeCard
            title="Traveling"
            description="Nunc quis neque a neque venenatis tristique. Sed a facilisis diam.
            Mauris a ligula felis"
            imgSrc="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          />
        </Grid>
      </div>
    </div>
  );
};

export default Home;

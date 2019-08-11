import React from 'react';

import Layout from '../../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Projects</h2>
        <p>Overview of what I am building</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <header>
            <h3>Pocket Budget</h3>
            <p>Cloud Firestore - React - TailwindCSS</p>
          </header>
          <p>
            <a href="/portfolio/pocket-budget">More details</a>
          </p>

          <header>
            <h3>Should I automate it?</h3>
            <p>React - MaterializeCSS</p>
          </header>
          <p>
            Should I automate it? is designed for anyone interested to see when
            a manual process would benefit from being automated. This is a pair
            project which was inspired by{' '}
            <a href="https://xkcd.com/1205/" target="blank">
              xkcd 1205
            </a>
          </p>
          <p>
            <a href="/portfolio/roi-calculator">More details</a>
          </p>
          <br />
          <header>
            <h3>A World in Metric</h3>
            <p>Chrome Extension</p>
          </header>
          <p>
            <a href="/portfolio/chrome-extension">More details</a>
          </p>
          <br />
          <header>
            <h3>Yoga Dice</h3>
            <p>Cloud Firestore - React - Redux - Materialize</p>
          </header>
          <p>
            <a
              href="https://celinechole.github.io/my-yoga-dice/"
              target="blank"
            >
              Yoga Dice version 1, built in December 2018.
            </a>
            <br />
            <a href="https://yoga-dice-4c429.firebaseapp.com/#/" target="blank">
              Yoga Dice version 2, built in March 2019.
            </a>
          </p>
          <p>
            Everything began with my passion for yoga and the desire to
            randomize my practice for the days the inspiration is lower than
            usual.
          </p>
          <p>
            Before starting the bootcamp Grace Hopper (Fullstack Academy) I
            built a very simple version of this idea only using Vanilla
            JavaScript. A few weeks into the Grace Hopper program, my desire to
            rebuild a more elaborate version of the yoga dice app was really
            high.
          </p>
          <p>
            The main goal was building something nice using some technologies I
            was learning - in this case I wanted to practice React and Redux -
            but also discovering other technologies that I wouldn't have the
            opportunity to learn during my time in the bootcamp - Firebase and
            Firestore.
          </p>
          <p>
            <a href="/portfolio/yoga-dice">More details</a>
          </p>
          <br />
          <header>
            <h3>Julia</h3>
            <p>
              Node - Express - Postgres - Sequelize - React - Redux
              <br />
              React Bootstrap - Web Speech API - Responsive Voice - Annyang
            </p>
          </header>

          <p>
            Are you struggling to cook and to navigate through your recipe?
            Tired of washing your hands to check how much flour you need or
            what's the next step? This speaks to all of us, this is why we
            decided to create a hands free recipe assistant.
          </p>
          <p>
            The ideal cooking experience is a hands-free recipe that could guide
            us through the entire cooking process only using our voice. We
            imagined a recipe assistant that would be able to read the recipe
            and to let us know the exact ingredient we need for each step.
          </p>
          <p>
            This was the capstone project for Grace Hopper, and was completed in
            a team of 4 over 10 days.
          </p>
          <p>
            <a href="/portfolio/julia">More details</a>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

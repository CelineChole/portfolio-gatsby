import React from 'react';
import Layout from '../../components/Layout';
import yogaDice from '../../assets/images/yogaDice.jpg';
import chef from '../../assets/images/chef.jpg';
import automateUndraw from '../../assets/images/automateUndraw.jpg';
import budget from '../../assets/images/budget.jpg';
import yoga from '../../assets/images/yoga.jpg';
import worldInMetric from '../../assets/images/worldInMetric.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Projects</h2>
        <p>Overview of what I am building</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
        <section className="explore">
            <div className="image">
              <img src={yoga} alt="woman meditating" />
            </div>
            <div className="content">
              <header>
                <h3>Yogi Library</h3>
                <p>GatbsyJS - GraphQL - TailwindCSS</p>
              </header>
              <p>Visit: {` `}
                  <a
                    href="https://yogilibrary.com/"
                    target="blank"
                  >
                    yogilibrary.com
                  </a>
                </p>
              <p>
                Yogi Library is a curated list of videos to practice yoga. Videos can be viewed by duration, by type of yoga, by tags...
              </p>
              <p>
                <a href="/portfolio/yogi-library">More details</a>
              </p>
            </div>
          </section>
          <section className="explore">
            <div className="image">
              <img src={budget} alt="wallet" />
            </div>
            <div className="content">
              <header>
                <h3>Pocket Budget</h3>
                <p>Cloud Firestore - React - TailwindCSS</p>
              </header>
              <p>Work in progress</p>
              <p>
                <a
                  href="https://github.com/aedificatorum/pocket-budget"
                  target="blank"
                >
                  GitHub
                </a>
                <br />
                {/* <a href="/portfolio/pocket-budget">More details</a> */}
              </p>
            </div>
          </section>
          <section className="explore">
            <div className="image">
              <img src={automateUndraw} alt="" />
            </div>
            <div className="content">
              <header>
                <h3>Should I automate it?</h3>
                <p>React - MaterializeCSS</p>
              </header>
              <p>Visit: {` `}
                  <a
                    href="https://aedificatorum.github.io/shouldiautomateit/"
                    target="blank"
                  >
                    Should I Automate It?
                  </a>
                </p>
              <p>
                Should I automate it? is designed for anyone interested to see
                when a manual process would benefit from being automated. This
                is a pair project which was inspired by{' '}
                <a href="https://xkcd.com/1205/" target="blank">
                  xkcd 1205
                </a>
              </p>
              <p>
                <a href="/portfolio/roi-calculator">More details</a>
              </p>
            </div>
          </section>
          <section className="explore">
            <div className="image">
              <img src={worldInMetric} alt="world map" />
            </div>
            <div className="content">
              <header>
                <h3>A World in Metric</h3>
                <p>
                  <a
                    href="https://chrome.google.com/webstore/detail/a-world-in-metric/pdleompplbpjooccppmgapllobgodjed"
                    target="blank"
                  >
                    Chrome Web Store
                  </a>
                </p>
              </header>
              <span>
                <p>
                  Trying to follow a cooking recipe but not sure why they're
                  asking you to use cups instead of a scale? Installing this
                  extension will allow you to highlight a measure (e.g. 1 cup,
                  15lbs, 12 ounces) and have a small toast appear with the
                  appropriate conversion into grams/millilitres.
                </p>
                <a href="/portfolio/chrome-extension">More details</a>
              </span>
            </div>
          </section>
          <section className="explore">
            <div className="image">
              <img src={yogaDice} alt="" />
            </div>
            <div className="content">
              <header>
                <h3>Yoga Dice</h3>
                <p>Cloud Firestore - React - Redux - Materialize</p>
              </header>
              <span>
                <p>
                  <a
                    href="https://celinechole.github.io/my-yoga-dice/"
                    target="blank"
                  >
                    Yoga Dice version 1, built in December 2018.
                  </a>
                  <br />
                  <a
                    href="https://yoga-dice-4c429.firebaseapp.com/#/"
                    target="blank"
                  >
                    Yoga Dice version 2, built in March 2019.
                  </a>
                </p>
                <p>
                  Everything began with my passion for yoga and the desire to
                  randomize my practice for the days the inspiration is lower
                  than usual.
                </p>
                <p>
                  <a href="/portfolio/yoga-dice">More details</a>
                </p>
              </span>
            </div>
          </section>

          <section className="explore">
            <div className="image">
              <img src={chef} alt="chef" />
            </div>
            <div className="content">
              <header>
                <h3>Julia</h3>
                <p>
                  Node - Express - Postgres - Sequelize - React - Redux - Web Speech API
                </p>
              </header>
              <span>
                <p>
                  Are you struggling to cook and to navigate through your
                  recipe? Tired of washing your hands to check how much flour
                  you need or what's the next step? This speaks to all of us,
                  this is why we decided to create a hands free recipe
                  assistant.
                </p>
                <p>
                  <a href="/portfolio/julia">More details</a>
                </p>
              </span>
            </div>
          </section>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

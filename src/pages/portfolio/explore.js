import React from 'react';

import Layout from '../../components/Layout';
import pic3 from '../../assets/images/pic03.jpg';
import pic4 from '../../assets/images/pic04.jpg';
import pic5 from '../../assets/images/pic05.jpg';
import budget from '../../assets/images/budget.jpg';
import automatexkcd from '../../assets/images/automatexkcd.jpg';

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
          <div className="row gtr-50 gtr-uniform">
            <div className="col-5">
              <span>
              <p>Work in progress</p>
          {/* <p>
            <a href="/portfolio/pocket-budget">More details</a>
          </p> */}
              </span>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <span className="image fit">
                <img src={budget} alt="" />
              </span>
            </div>
          </div>
          
          <br />
          <br />
          <header>
            <h3>Should I automate it?</h3>
            <p>React - MaterializeCSS</p>
          </header>
          <div className="row gtr-50 gtr-uniform">
            <div className="col-5">
              <span className="image fit">
                <img src={automatexkcd} alt="" />
              </span>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <span>
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
              </span>
            </div>
          </div>
          <br />
          <br />
          <header>
            <h3>A World in Metric</h3>
            <p><a
              href="https://chrome.google.com/webstore/detail/a-world-in-metric/pdleompplbpjooccppmgapllobgodjed"
              target="blank"
            >
              Chrome Web Store
            </a></p>
          </header>
          <div className="row gtr-50 gtr-uniform">
            <div className="col-5">
              <span>
                <p>
                  Trying to follow a cooking recipe but not sure why they're
                  asking you to use cups instead of a scale? Or maybe following
                  along with a news article but you're not quite sure to be
                  impressed or not by that record-breaking 40lb chicken nugget?
                  These and many more are the daily tribulations you'll face as
                  a user of the metric system in an imperial country.
                </p>

                <p>
                  Installing this extension will allow you to highlight a
                  measure (e.g. 1 cup, 15lbs, 12 ounces) and have a small toast
                  appear with the appropriate conversion into grams/millilitres.
                </p>
              </span>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic3} alt="" />
              </span>
            </div>
            <p>
              Once installed you will need to activate the extension when you
              want to perform a translation by clicking on the extension's icon
              (the cooking pot). You'll know it's worked as the icon will show
              the words ON. From that point on anything, you highlight will
              appear in a small toast at the top right of your page. To
              deactivate simply click the icon again and you'll be able to
              resume selecting blocks of text to send to your loved ones, along
              with an explanation of what a 24oz soda really means.
            </p>
          </div>
          <br />
          <br />
          <header>
            <h3>Yoga Dice</h3>
            <p>Cloud Firestore - React - Redux - Materialize</p>
          </header>
          <div className="row gtr-50 gtr-uniform">
            <div className="col-6">
              <span className="image fit">
                <img src={pic4} alt="" />
              </span>
            </div>
            <div className="col-6">
              <span>
                <p>
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
                </p>
                <p>
                  Everything began with my passion for yoga and the desire to
                  randomize my practice for the days the inspiration is lower
                  than usual.
                </p>
                <p>
                  Before starting the bootcamp Grace Hopper (Fullstack Academy)
                  I built a very simple version of this idea only using Vanilla
                  JavaScript. A few weeks into the Grace Hopper program, my
                  desire to rebuild a more elaborate version of the yoga dice
                  app was really high.
                </p>
              </span>
            </div>
          </div>
          <br />
          <br />
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
          <br />
          <header>
            <h3>Julia</h3>
            <p>
              Node - Express - Postgres - Sequelize - React - Redux
              <br />
              React Bootstrap - Web Speech API - Responsive Voice - Annyang
            </p>
          </header>
          <div className="row gtr-50 gtr-uniform">
            <div className="col-5">
              <span>
                <p>
                  Are you struggling to cook and to navigate through your
                  recipe? Tired of washing your hands to check how much flour
                  you need or what's the next step? This speaks to all of us,
                  this is why we decided to create a hands free recipe
                  assistant.
                </p>
                <p>
                  The ideal cooking experience is a hands-free recipe that could
                  guide us through the entire cooking process only using our
                  voice. We imagined a recipe assistant that would be able to
                  read the recipe and to let us know the exact ingredient we
                  need for each step.
                </p>
              </span>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic5} alt="" />
              </span>
            </div>
          </div>

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

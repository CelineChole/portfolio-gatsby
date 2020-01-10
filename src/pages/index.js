import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';
import yoga from '../assets/images/yoga.jpg';
import budget from '../assets/images/budget.jpg';
import automateundraw from '../assets/images/automateUndraw.jpg';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Fullstack Web Instructor at{' '}<div>
              <a href="https://www.fullstackacademy.com/" target="blank">
                Fullstack Academy
            </a></div>
          </h2>
          <div className="not-too-wide">
            <p>
              I am currently a Fullstack Web Instructor at Fullstack Academy, an immersive software engineering program based in NYC.
            </p>
          </div>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={yoga} alt="woman meditating" />
        </div>
        <div className="content">
          <h2>Yogi Library</h2>
          <p>A curated list of videos to practice yoga.</p>
          <div>
            <span className="index-links">
              <a
                href="https://github.com/CelineChole/yoga-library"
                target="blank"
              >
                GitHub
              </a>
            </span>
            <span className="index-links">
              <a href="https://yogilibrary.com/" target="blank">
                Live Demo
              </a>
            </span>
            <span className="index-links">
              <a href="/portfolio/yogi-library">More details</a>
            </span>
          </div>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={budget} alt="wallet" />
        </div>
        <div className="content">
          <h2>Pocket Budget</h2>
          <p>An app to record your budget on the go.</p>
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
      <section className="spotlight">
        <div className="image">
          <img src={automateundraw} alt="" />
        </div>
        <div className="content">
          <h2>Should I automate it?</h2>
          <p>
            Should I automate it? is designed for anyone interested to see when
            a manual process would benefit from being automated.
          </p>
          <div>
            <span className="index-links">
              <a
                href="https://github.com/aedificatorum/shouldiautomateit"
                target="blank"
              >
                GitHub
              </a>
            </span>
            <span className="index-links">
              <a
                href="https://aedificatorum.github.io/shouldiautomateit/"
                target="blank"
              >
                Live Demo
              </a>
            </span>
            <span className="index-links">
              <a href="/portfolio/roi-calculator">More details</a>
            </span>
          </div>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Technologies</h2>
          <p>Overview of the technologies I am familiar with.</p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Frontend</h3>
            <p>
              Comfortable with React, just starting to wrap my head around
              Redux.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Backend</h3>
            <p>
              Building and teaching Node.js, Express, Postgres. Leveraging Cloud
              Firestore for personal projects.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Analytics</h3>
            <p>
              Business Analyst in a former life. Fluent with Excel, pretty good
              with Power Query and Power BI.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>CSS Frameworks</h3>
            <p>
              Shipped a few projects with MaterializeCSS and React-Bootstrap.
              Really digging TailwindCSS right now.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Hosting</h3>
            <p>
              Deployed with Firebase, Heroku and GitHub Pages. Surge is really
              impressing me.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Others</h3>
            <p>
              Building with Gatsby. Pretending to understand GraphQL. Still
              cannot center an image in CSS.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Further</h2>
          <p>
            Complete list of projects? Click on Explore.
            <br />
            More about me? Click on Story.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/portfolio/explore" className="button fit secondary">
              Explore
            </a>
          </li>
          <li>
            <a href="/story" className="button fit secondary">
              Story
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
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
            Fullstack Web Instructor at{' '}
            <a href="https://www.pursuit.org/" target="blank">
              Pursuit
            </a>
          </h2>
          <p>
            I am currently a Fullstack Web Instructor Associate in a non profit
            organisation
            <br />
            promoting more diversity in the tech world.
          </p>
          <p>
            To explore some resources I built for students, <a href="/portfolio/student-resources">click here.</a>
            <br />
            To see more personal projects scroll down.
          </p>
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
          <img src={pic1} alt="" />
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
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Should I automate it?</h2>
          <p>
            Should I automate it? is designed for anyone interested to see when
            a manual process would benefit from being automated.
          </p>
          <p>
            <a
              href="https://github.com/aedificatorum/shouldiautomateit"
              target="blank"
            >
              GitHub
            </a> |  
            <a
              href="https://aedificatorum.github.io/shouldiautomateit/"
              target="blank"
            >
              Live Demo
            </a>
            <br />
            <a href="/portfolio/roi-calculator">More details</a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>A World in Metric</h2>
          <p>An extension to convert imperial measure to the metric system.</p>
          <p>
            <a
              href="https://chrome.google.com/webstore/detail/a-world-in-metric/pdleompplbpjooccppmgapllobgodjed"
              target="blank"
            >
              Chrome Web Store
            </a>
            <br />
            <a href="/portfolio/explore">More details</a>
          </p>
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
              I have experience using JavaScript, React and Redux. 
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Backend</h3>
            <p>
              I have been building application using Postgres and Cloud Firestore.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Authentication</h3>
            <p>
              I have used Passport and Firebase authentication.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>CSS Frameworks</h3>
            <p>
              I have been playing with these frameworks: MaterializeCSS,
              React-Bootstrap, TailwindCSS.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Hosting</h3>
            <p>
              I have used Firebase, Heroku and GitHub.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Others</h3>
            <p>
              I have been experimenting using Gatsby to build this portfolio site.
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

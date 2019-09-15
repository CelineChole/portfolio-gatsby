import React from 'react';

import Layout from '../../components/Layout';
import automate from '../../assets/images/automate.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Should I automate it?</h2>
        <p>Return On Investment Calculator</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <div className="row">
            <div className="col-6">
              <h3>Links</h3>
              <p>
                <a
                  href="https://github.com/aedificatorum/shouldiautomateit"
                  target="blank"
                >
                  GitHub
                </a>
                {` `}|{` `}
                <a
                  href="https://aedificatorum.github.io/shouldiautomateit/"
                  target="blank"
                >
                  Live Demo
                </a>
              </p>
            </div>
            <div className="col-6">
              <h3>Technologies</h3>
              <p>React - MaterializeCSS</p>
            </div>
          </div>
          <br />
          <h3>Overview</h3>
          <p>
            Should I automate it? is designed for anyone interested to see when
            a manual process would benefit from being automated. This is a pair
            project which was inspired by{' '}
            <a href="https://xkcd.com/1205/" target="blank">
              xkcd 1205
            </a>
          </p>
          <h3>Functionality</h3>

          <div className="col-1"></div>
          <p>
            <span className="image left">
              <img src={automate} alt="" />
            </span>
            Basic options allow you to indicate how often you perform the task
            and how long it takes you. Then you indicate how long it will take
            to automate the task. Now you can click 'Should I automate it?' and
            find out how many months it will take to get a return on your
            investment.
          </p>

          <p>
            Advanced options allows you to tailor the tool even further to your
            needs. By default the tool assumes that the estimate might be
            potentially twice as long (0.5 - 50%) as it will actually take. It
            also assumes that it may be underestimating by up to three times
            (3.0 - 300%). If you are more (or less) certain about your estimate
            adjust these values. The number of months forecasted can also be
            customised, and defaults to 36.
          </p>
          <h3>Future Ideas</h3>
          <p>
            One of the future ideas would be to translate the tool and provide a
            more detailed summary.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

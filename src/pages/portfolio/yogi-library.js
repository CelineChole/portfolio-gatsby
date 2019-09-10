import React from 'react';
import Layout from '../../components/Layout';
import yoga from '../../assets/images/yoga.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Yogi Library</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Technologies</h3>
          <p>GatsbyJS - React - GraphQL - Tailwind</p>
          <h3>Overview</h3>
          <p>
            In 2018 I deciced to commit to a daily yoga practice. I began to
            consume a lot of online videos to give me ideas and saved them in a
            folder on YouTube. My growing collection quickly became hard to
            manage. Retrieving the exact video I wanted was a question of chance
            and I was getting frustrated. One quick fix was to create several
            folders but that didn't really solve the problem because the
            organization was not systematic and I like things to be well organized.
          </p>
          <p>
            I wanted a library to group all my favorite videos and filter them
            by different criteria such as the style of yoga, the duration, the
            level and any additional tags. I decided to create it.
          </p>
          <h3>Functionality</h3>
          <p>
            Yogi libary offers a curated list of my favorite yoga videos. Each
            video can be viewed by different properties:
            <ul>
              <li>YouTube channel</li>
              <li>Duration</li>
              <li>Tags</li>
              <li>Level</li>
            </ul>
            Videos can be ordered by ascending or descending order.
          </p>
          <div className="row gtr-50 gtr-uniform">
            <div className="col-3">
              <span className="image fit">
                
              </span>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={yoga} alt="" />
              </span>
            </div>
          </div>
          <br />
          <h3>Frontend</h3>
          <p>The frontend is built with GatsbyJS, React and Tailwind.</p>
          <h3>Backend</h3>
          <p>
            I am using a Google sheets as my database. I and accessing the data
            using a Gatsby plugin and GraphQL queries.
          </p>
          <h3>Deployment</h3>
          <p>
            Yogi-library is deployed with Surge. I really appreciate how easy it
            is to deploy with two commands.
          </p>
          <hr />
          <h4>Links</h4>
          <p>
            <a
              href="https://github.com/CelineChole/yoga-library"
              target="blank"
            >
              GitHub
            </a>
            |
            <a href="http://yogi-library.surge.sh/" target="blank">
              Live Demo
            </a>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

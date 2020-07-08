import React from 'react';

import Layout from '../../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Student Resources</h2>
        <p>Sample of resources built for students</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>10 days of JavaScript</h3>
          <p>
            This is a collection of{' '}
            <a href="http://celine.tech/2019-07/ten-days-js/" target="blank">
              10 JavaScript problems
            </a>{' '}
            I created to help students consolidate their knowledge.
          </p>

          <hr />

          <h3>Express middleware review lesson</h3>
          <p>
            A live example to understand Express middleware. Navigate bewtween
            branches to follow step by step.
          </p>
          <a
            href="https://github.com/CelineChole/express-middleware"
            target="blank"
          >
            Link to the repo.
          </a>

          <hr />

          <h3>Recommended extensions for Visual Studio Code</h3>
          <p>
            This is a collection of{' '}
            <a
              href="http://celine.tech/2019-08/vs-code-extension/"
              target="blank"
            >
              VS code extensions
            </a>{' '}
            I found very useful.
          </p>

          <hr />

          <h3>Tech resources</h3>
          <p>
            {' '}
            <a href="http://celine.tech/2019-08/tech-resources/" target="blank">
              A collection of resources
            </a>{' '}
            I found useful for students.
          </p>

          <hr />

          <h3>Recursion</h3>
          <p>
            Review lesson on{' '}
            <a
              href="http://celine.tech/2020-01/recursion-recursion-recursion/"
              target="blank"
            >
              recursion
            </a>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

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
            This is a collection of 10 JavaScript problems I created to help
            students consolidate their knowledge.
          </p>
          <a
            href="https://gist.github.com/CelineChole/fed4df894f83f02fa750bd92cddded74"
            target="blank"
          >
            Link to the gist.
          </a>
          
          <hr />

          <h3>Tech resources</h3>
          <p>A collection of resources I found useful for students.</p>
          <a
            href="https://gist.github.com/CelineChole/38ff863559f13ef39a6b5646c57e1996"
            target="blank"
          >
            Link to the gist.
          </a>

          <hr />

          <h3>Recursion</h3>
          <p>
            I lead a review lesson on recursion -{' '}
            <a
              href="https://gist.github.com/CelineChole/1fa7d405b1efeed3ebfe04047c6b8342"
              target="blank"
            >
              link to the gist.
            </a>
          </p>

        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

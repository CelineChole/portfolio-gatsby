import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>A bit about me</h2>
        <p>From business analyst to web developer</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>
            I'm Céline, a law graduate who was really interested in analyzing
            intellectual property portfolio to measure team performance and
            track business growth and become a business analyst in a law firm.
          </p>

          <p>
            My journey in tech began by building a quote tool using Excel VBA to
            solve our problem of recruitment (finding someone with knowledge in
            Intellectual Property while also being good with numbers). I further
            realized that I could automate other tasks and save people from
            tedious and error-prone activities. This was also helping the team
            to accomplish more without the need to recruit additional people.
          </p>

          <p>
            Relocating to the USA was the perfect opportunity to switch careers.
            I thought the fastest way to get started in my career as a developer
            was to graduate from the Grace Hopper program.
          </p>

          <p>
            Spending the last few months coding 7 days a week has really
            confirmed to me that this is what I want to do. I am now really
            excited about the idea of buildings products, software or tools to
            help people do more.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

import React from 'react';
import worldInMetric from '../../assets/images/worldInMetricScreenshot.jpg';

import Layout from '../../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>A World in metric</h2>
        <p>A handy Chrome Extension</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Overview</h3>
          <p>
            Trying to follow a cooking recipe but not sure why they're asking
            you to use cups instead of a scale? Or maybe following along with a
            news article but you're not quite sure to be impressed or not by
            that record-breaking 40lb chicken nugget? These and many more are
            the daily tribulations you'll face as a user of the metric system in
            an imperial country.
          </p>

          <p>
            Installing this extension will allow you to highlight a measure
            (e.g. 1 cup, 15lbs, 12 ounces) and have a small toast appear with
            the appropriate conversion into grams/millilitres.
          </p>

          <p>
            Once installed you will need to activate the extension when you want
            to perform a translation by clicking on the extension's icon (the
            cooking pot). You'll know it's worked as the icon will show the
            words ON. From that point on anything, you highlight will appear in
            a small toast at the top right of your page. To deactivate simply
            click the icon again and you'll be able to resume selecting blocks
            of text to send to your loved ones, along with an explanation of
            what a 24oz soda really means.
          </p>
          <a
            href="https://chrome.google.com/webstore/detail/a-world-in-metric/pdleompplbpjooccppmgapllobgodjed"
            target="blank"
          >
            Link to the extension in the Chrome Web Store
          </a>
          <br />
          <br />
          <div className="row gtr-50 gtr-uniform">
            <div className="col-3" />
            <div className="col-6">
              <span className="image fit">
                <img src={worldInMetric} alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

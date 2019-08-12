import React from 'react';

import Layout from '../../components/Layout';
import pic4 from '../../assets/images/pic04.jpg';
import yogaDiceCreatePose from '../../assets/images/yogaDiceCreatePose.jpg';
import yogaDiceAdmin from '../../assets/images/yogaDiceAdmin.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Yoga Dice</h2>
        <p>Work In Progress</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Functionality</h3>
          <p>
            At the moment the website supports the following functions
            <ul>
              <li>Local login</li>
              <li>Display 6 random poses, with a difficulty level filter</li>
              <li>Create a new pose</li>
              <li>Edit poses</li>
            </ul>
          </p>
          <div className="row gtr-50 gtr-uniform">
            <div className="col-6">
              <span className="image fit">
                <img src={pic4} alt="" />
              </span>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={yogaDiceCreatePose} alt="" />
              </span>
            </div>
          </div>

          <h3>Frontend</h3>
          <p>
            The frontend is built with React and Redux, although not necessary I
            wanted to include Redux in order to practice.
          </p>
          <h3>Backend</h3>
          <p>
            I am using a backend as a service: Firestore, a noSQL database
            provided by Google. I really enjoyed the flexibility of this product
            in comparison to a SQL database. I have three collections, one to
            store all my poses, one to store the user's information and finally
            one to store admin.
          </p>
          <h3>Firestore security rules</h3>
          <p>
            Security is really important because the client talks directly to
            the database. Security rules can be directly implemented through
            Firebase Rules. It is a configuration document that determines what
            locations have restricted read/write permissions. I have the below
            security rules. I created an administrator table and only users from
            this table are able to modify poses. Originally I included admin in
            the user table but I later realised that anyone using a simple
            program as Postman could make himself admin so I corrected this.
            Anyone can create a user (we want people to be able to sign up),
            only logged in users can read other user's information - this is for
            future development, e.g. being able to see other users favorite
            poses.
          </p>
          <h3>Deployment</h3>
          <p>
            Originally I wanted to deploy my yoga dice using Heroku but I
            realised that I could deploy it using Firebase, something I had
            never done and that I was keen to discover.
          </p>
          <h3>What would I do differently?</h3>
          <p>
            There are two main things I would do differently if I restarted this
            project. The first thing would be to not use Redux. I would explore
            the new React context API. I understand that it provides a way to
            pass data through the component tree without having to pass props
            down manually which would be very handy. The second thing I would do
            differently is write tests. It is hard to see the value of tests
            early on, but as I make more changes (and introduce more bugs!) I
            start to see why they can be so valuable.
          </p>
          <h3>Future ideas</h3>
          <p>
            There are a lot of additional features I would love to implement,
            one of the first one would be to increase the number of choices for
            the filters - I would like to enable users to select pose types such
            as core, backbend, balance, etc. Another feature would be to add a
            practice timer. Users can login but so far there is not much else
            they can do, I would like to implement a sort of dashboard where
            they could have access to their favorite poses and set their
            favorite filters.
          </p>
          <hr />
          <h4>Links</h4>
          <p>
            <a
              href="https://celinechole.github.io/my-yoga-dice/"
              target="blank"
            >
              Live Demo Yoga Dice 1
            </a>
            |
            <a
              href="https://yoga-dice-4c429.firebaseapp.com/#/"
              target="blank"
            >
              Live Demo Yoga Dice 2
            </a>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

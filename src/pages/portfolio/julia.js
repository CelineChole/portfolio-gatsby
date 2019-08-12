import React from 'react';

import Layout from '../../components/Layout';
import pic5 from '../../assets/images/pic05.jpg';
import pic6 from '../../assets/images/pic06.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Julia</h2>
        <p>A hands-free recipe helper</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <div className="row gtr-50 gtr-uniform">
            <div className="col-5">
              <span className="image fit">
                <img src={pic5} alt="" />
              </span>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic6} alt="" />
              </span>
            </div>
          </div>
          <h3>Functionality</h3>
          <p>
            The application has a database of recipes. Once you select a recipe,
            the application has several voice commands to guide you through
            cooking.
          </p>
          <p>
            <ul>
              <li>Start: starts the recipe</li>
              <li>Ingredients: reads the relevant ingredients for the step</li>
              <li>
                Instructions: reads the instructions for the selected step
              </li>
              <li>Repeat: repeats the instructions</li>
              <li>
                Next: moves to the next step Previous: goes back to the previous
              </li>
              <li>
                step Back to recipe: returns to the recipe overview Stop: stops
                the
              </li>
              <li>voice assistant</li>
            </ul>
          </p>

          <p>
            Our recipe assistant also allows user to choose a recipe from one of
            their favorite websites and add it to Julia.
          </p>
          <h3>Frontend</h3>
          <p>The frontend is built with React, Redux and several APIs.</p>
          <p>The layout is built with React Bootstrap.</p>
          <p>
            In order to achieve our goal we needed to implement a technology
            able to understand voice commands and one able to read the text. We
            chose the Web Speech API because it is already embedded into Google
            Chrome. Rather than using the APIs directly we used two libraries.
          </p>
          <p>The Web Speech API is divided into two parts:</p>
          <p>
            <ul>
              <li>
                Speech recognition: this part handles voice recognition so it
                allows the users to use their voice in order to know the
                ingredients needed and / or how to proceed. We chose{' '}
                <a href="https://www.talater.com/annyang/" target="blank">
                  Annyang
                </a>
                , a small library offering us the possibility to add a trigger
                word; in our case 'Hey Julia'. The trigger word facilitates the
                recognition of the command. We added some regular expressions in
                order to handle fuzzy matches. We noticed that often the API
                understood 'Juliette' or 'Julian' instead of Julia. We also had
                to cover the case of someone speaking and then giving a command
                without a pause. The choice of Annyang was good for our specific
                project because it was fairly easy to use. Though we would have
                benefitted from a more detailed documentation.
              </li>
              <br />
              <li>
                Speech synthesis: handles text to speech. We chose{' '}
                <a href="https://responsivevoice.com/" target="blanck">
                  ResponsiveVoice
                </a>{' '}
                because this library handles abbreviations automatically. In a
                recipe instead of reading '12 oz' it will read '12 ounces'.
              </li>
            </ul>
          </p>
          <h3>Backend</h3>
          <p>The backend is built using Express, Node and Postgres.</p>
          <h3>Web Scrapping</h3>
          <p>
            Our recipe assistant allows users to choose a recipe from one of
            their favorite websites and add it to Julia. Web scraping was very
            challenging. Within our timeframe (10 days) and with our team (4
            people) this was definitely a bold decision. Our version of web
            scraping is not perfect, it works really well for some websites with
            a certain structure. If the web scraping doesn't work or isn't
            perfect the user can edit the recipe manually.
          </p>
          <h3>What would I do differently ?</h3>
          <p>
            This project was a great learning experience. Our research for the
            API and the libraries used was not deep enough. ResponsiveVoice was
            a really great choice but Annyang might not have been the best
            library for us. I realized the importance of choosing the right tool
            for a project. In the future I will spend more time researching a
            library, making sure the documentation is abundant and there is a
            big community using the product.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;

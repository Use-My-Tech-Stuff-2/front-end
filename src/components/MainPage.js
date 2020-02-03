import React from "react";
import { MainPageContainer } from "../styles/styles.js";
import Typing from "../styles/Typing.js";

const MainPage = () => {
  return (
    <MainPageContainer>
      <div className="headerContainer">
        <h1>
          {" "}
          Let your spare
          <Typing
            strings={[
              "Laptop",
              "Camera",
              "Smartphone",
              "Drone",
              "Headphones",
              "Hoverboard",
              "Speakers"
            ]}
          />
          make money for you!
        </h1>
        <h2>
          Share your tech and make on average
          <br /> over <strong>300$</strong> a month on Shareable, <br />
          the world largest tech share marketplace.{" "}
        </h2>
        <button>Get Started</button>
      </div>
      <div className="imageContainer"></div>
      <div className="contentContainer">
        <section id="conference-timeline">
          <div className="timeline-start">List your item</div>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            <div className="timeline-article">
              <div className="content-left-container">
                <div className="content-left">
                  <p>
                    Create an account with the largest smallest unknown tech
                    sharing webiste,no sign-up charges or monthly fee, all it
                    takes is 10 min of you time!{" "}
                    <span className="article-number">01</span>
                  </p>
                </div>
              </div>
              <div className="meta-date">
                <span className="date">Join</span>
                <span className="month">us</span>
              </div>
            </div>
            <div className="timeline-article">
              <div className="content-left-container"></div>
              <div className="content-right-container">
                <div className="content-right">
                  <p>
                    Upload you tech items and set your price and rules, its easy
                    as that, we adjust prices to maximize your earnings!{" "}
                    <span className="article-number">02</span>
                  </p>
                </div>
              </div>
              <div className="meta-date">
                <span className="date">Set</span>
                <span className="month">price</span>
              </div>
            </div>
            <div class="timeline-article">
              <div class="content-left-container">
                <div class="content-left">
                  <p>
                    Sit back and wait for earning to start, get payed by direct
                    deposit or paypal, with peace of mind knowing that we got
                    you covered and insured!{" "}
                    <span class="article-number">03</span>
                  </p>
                </div>
              </div>
              <div class="meta-date">
                <span class="date">Make</span>
                <span class="month">$$$</span>
              </div>
            </div>
          </div>
          <div class="timeline-end">Get payed</div>
        </section>
      </div>
    </MainPageContainer>
  );
};

export default MainPage;

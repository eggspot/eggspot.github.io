import React from 'react'
import '../../static/home.style.css'

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* Hero(extended) navbar */}
        <div className="navbar navbar--extended">
          <nav className="nav__mobile" />
          <div className="container">
            <div className="navbar__inner">
              <a href="index.html" className="navbar__logo">
                Eggspot
              </a>
              <nav className="navbar__menu">
                <ul>
                  <li>
                    <a href="#">Shopify services</a>
                  </li>
                  <li>
                    <a href="#">Email Template</a>
                  </li>
                  <li>
                    <a href="#">Get a Quote</a>
                  </li>
                </ul>
              </nav>
              <div className="navbar__menu-mob">
                <a href id="toggle">
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                      className
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Hero unit */}
        <div className="hero">
          <div className="hero__overlay hero__overlay--gradient" />
          <div className="hero__mask" />
          <div className="hero__inner">
            <div className="container">
              <div className="hero__content">
                <div className="hero__content__inner" id="navConverter">
                  <h1 className="hero__title">
                    Professional Ecommerce Services
                  </h1>
                  <p className="hero__text text__center">
                    People and best practices that bring your digital
                    experiences to life. Development models and approaches
                    designed to fit your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__sub">
          <span id="scrollToNext" className="scroll">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              className="hero__sub__down"
              fill="currentColor"
              width="512px"
              height="512px"
              viewBox="0 0 512 512"
              style={{ enableBackground: 'new 0 0 512 512' }}
              xmlSpace="preserve"
            >
              <path d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3z" />
            </svg>
          </span>
        </div>
        {/* Steps */}
        <div className="steps landing__section">
          <div className="container">
            <h2>Who can use Eggspot?</h2>
            <p>
              Here's who we can think of, but surely creative people will
              surprise us.
            </p>
          </div>
          <div className="container">
            <div className="steps__inner">
              <div className="step">
                <div className="step__media">
                  <img
                    src="./images/undraw_designer.svg"
                    className="step__image"
                  />
                </div>
                <h4>Programmers</h4>
                <p className="step__text">
                  A landing page for your open source projects. Present your
                  solution, easily create docs.
                </p>
              </div>
              <div className="step">
                <div className="step__media">
                  <img
                    src="./images/undraw_responsive.svg"
                    className="step__image"
                  />
                </div>
                <h4>Designers</h4>
                <p className="step__text">
                  A website for your own freebies. Let the world download and
                  use your artwork.
                </p>
              </div>
              <div className="step">
                <div className="step__media">
                  <img
                    src="./images/undraw_creation.svg"
                    className="step__image"
                  />
                </div>
                <h4>Makers</h4>
                <p className="step__text">
                  A great starting point for your web application. Focus on your
                  idea and execution.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Expanded sections */}
        <div className="expanded landing__section">
          <div className="container">
            <div className="expanded__inner">
              <div className="expanded__media">
                <img
                  src="./images/undraw_browser.svg"
                  className="expanded__image"
                />
              </div>
              <div className="expanded__content">
                <h2 className="expanded__title">Shopify theme</h2>
                <p className="expanded__text">
                  Evie brings you the pages you'll need and the structure to
                  create your own, without a learning curve. It is minimal and
                  mostly styles plain elements. There are only a few classes
                  you'll need to know but nothing to disrupt your preferred
                  coding style.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="expanded landing__section">
          <div className="container">
            <div className="expanded__inner">
              <div className="expanded__media">
                <img
                  src="./images/undraw_frameworks.svg"
                  className="expanded__image"
                />
              </div>
              <div className="expanded__content">
                <h2 className="expanded__title">Email template</h2>
                <p className="expanded__text">
                  Evie has zero dependencies and uses vanilla JavaScript for a
                  few functions with minimal footprint. You can use React, Vue,
                  Angular, jQuery or whatever you prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="expanded landing__section">
          <div className="container">
            <div className="expanded__inner">
              <div className="expanded__media">
                <img src="./images/together.svg" className="expanded__image" />
              </div>
              <div className="expanded__content">
                <h2 className="expanded__title">Shopify Application</h2>
                <p className="expanded__text">
                  Landing, authentication and a few other pages to select from,
                  despite the small size. Tested on production at unDraw with
                  amazing speeds and unopinionated on how to structure your
                  project. We really hope you'll find it awesome and useful!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Call To Action */}
        <div className="cta cta--reverse">
          <div className="container">
            <div className="cta__inner">
              <h2 className="cta__title">Get started now</h2>
              <p className="cta__sub cta__sub--center">
                Grab the production version and begin your project instantly.
              </p>
              <a
                className="typeform-share button"
                href="https://nguyentrunghieu565658.typeform.com/to/tfGoVA"
                data-mode="popup"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  backgroundColor: '#00C9A7',
                  color: 'white',
                  cursor: 'pointer',
                  fontFamily: 'Helvetica,Arial,sans-serif',
                  fontSize: '18px',
                  lineHeight: '50px',
                  textAlign: 'center',
                  margin: 0,
                  height: '50px',
                  padding: '0px 33px',
                  borderRadius: '25px',
                  maxWidth: '100%',
                  whiteSpace: 'nowrap',
                  border: 'navajowhite',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontWeight: 600,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
                data-hide-headers="true"
                data-hide-footer="true"
                data-submit-close-delay={5}
                target="_blank"
              >
                Get a quote
              </a>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="footer footer--dark">
          <div className="container">
            <div className="footer__inner">
              <a href="index.html" className="footer__textLogo">
                Eggspot
              </a>
              <div className="footer__data">
                <div className="footer__data__item">
                  <div className="footer__row">
                    <a href="#" target="_blank" className="footer__link">
                      Shopify theme
                    </a>
                  </div>
                  <div className="footer__row">
                    <a href="#" target="_blank" className="footer__link">
                      Shopify application
                    </a>
                  </div>
                  <div className="footer__row">
                    <a href="#" target="_blank" className="footer__link">
                      Email template
                    </a>
                  </div>
                </div>
                <div className="footer__data__item">
                  <div className="footer__row">
                    <a href="#" target="_blank" className="footer__link">
                      Contact us
                    </a>
                  </div>
                  <div className="footer__row">
                    <a href="#" target="_blank" className="footer__link">
                      Terms &amp; Policy
                    </a>
                  </div>
                </div>
                <div className="footer__data__item">
                  <div className="footer__row">
                    <a href="#" target="_blank" className="footer__link">
                      GitHub
                    </a>
                  </div>
                  <div className="footer__row">
                    <a href="#" target="_blank" className="footer__link">
                      Twitter
                    </a>
                  </div>
                  <div className="footer__row">
                    <a href="#" target="_blank" className="footer__link">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Features71 from '../components/features71'
import Gallery2 from '../components/gallery2'
import Footer8 from '../components/footer8'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Store Choicy</title>
        <meta property="og:title" content="Store Choicy" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-heading">
                <span>St</span>
                <span className="home-text01">ore</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text03">Ch</span>
                <span className="home-text04">oicy</span>
              </h1>
              <span className="home-text05">
                <br></br>
                <span>Find the BEST Location for your restaurant!</span>
                <br></br>
                <span>
                  Discover prime spots with Store Choicy’s comprehensive
                  location analysis.
                </span>
                <br></br>
              </span>
              <button className="home-primary button-primary button-lg button">
                Get Start
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="/store%20choicy%20introduction.svg"
            className="home-image"
          />
        </div>
        <div className="home-services section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <div className="home-text-container">
                <h2 className="home-text11">
                  <span className="home-text12">St</span>
                  <span className="home-text13">ore</span>
                  <span className="home-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text15">Ch</span>
                  <span className="home-text16">oicy</span>
                  <span>
                    , your go-to platform for finding the perfect location for
                    your restaurant
                  </span>
                </h2>
                <span className="home-text18">
                  Our innovative system aggregates all environmental attributes
                  into a user-friendly scoring system, enabling you to
                  effortlessly evaluate the surrounding attributes of vacant
                  storefronts. With insights on nearby competitors and
                  commercial facilities that drive foot traffic, Store Choicy
                  offers a clear, instant snapshot of each location’s business
                  potential.
                </span>
              </div>
            </div>
            <Features71></Features71>
          </div>
        </div>
        <div className="section-container">
          <div className="home-text-container1">
            <h2 className="home-text19">
              <span>
                How
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text21">St</span>
              <span className="home-text22">ore</span>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text24">Ch</span>
              <span className="home-text25">oicy</span>
              <span> works</span>
            </h2>
            <div className="home-container1">
              <div className="home-container2">
                <Script
                  html={`<iframe width="888" height="500" 
src="https://www.youtube.com/embed/d0udbb91e30?si=q7EvwNPBqe15huXJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <Gallery2
          text="Recognized Excellence"
          content1="At Store Choicy, we take pride in offering a solution that has earned significant recognition and accolades from both public and professional institutions. Our platform is not only an award-winning project but also benefits from consultations with real industry players such as JLL, ensuring our insights and tools are grounded in real-world expertise."
          heading1="Award-Winning Innovation &amp; Industry-Endorsed Expertise"
          rootClassName="gallery2-root-class-name"
        ></Gallery2>
        <div className="home-banner section-container">
          <div className="home-max-width2 max-content-container">
            <h2 className="home-text27">
              <span>
                Get Ready to Maximize Your Business Potential with
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text29">St</span>
              <span className="home-text30">ore</span>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text32">Ch</span>
              <span className="home-text33">oicy</span>
              <span>!</span>
              <br></br>
              <span>Become the FIRST tralier for FREE!</span>
              <br></br>
            </h2>
            <a
              href="mailto:info@storechoicy.com?subject=Details about being a tester of Store Choicy"
              className="home-primary1 button-lg button-secondary-white button"
            >
              Contact us
            </a>
          </div>
          <img
            src="/end_contact_2-removebg-preview-600w.png"
            alt="image"
            className="home-image1"
          />
        </div>
      </main>
      <div className="home-footer section-container">
        <Footer8 rootClassName="footer8-root-class-name2"></Footer8>
      </div>
    </div>
  )
}

export default Home

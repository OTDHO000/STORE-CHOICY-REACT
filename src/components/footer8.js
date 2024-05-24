import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer8.css'

const Footer8 = (props) => {
  return (
    <div
      className={`footer8-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer8-max-width thq-section-max-width">
        <div className="footer8-content">
          <div className="footer8-newsletter">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              className="footer8-image"
            />
            <span className="footer8-content-title1 thq-body-small">
              Address
            </span>
            <span className="footer8-content1 thq-body-small">
              22/F No.3 Lockhart Road, Wan Chai, Hong Kong
            </span>
            <span className="footer8-content2 thq-body-small">
              <span className="footer8-text">Contact</span>
              <br className="footer8-text1"></br>
              <span className="">info@storechoicy.com</span>
              <br className=""></br>
            </span>
            <div className="footer8-social-links">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path
                  d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"
                  className=""
                ></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path
                  d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
          <div className="footer8-links">
            <div className="footer8-column1">
              <strong className="footer8-column1-title thq-body-large">
                {props.column1Title}
              </strong>
              <div className="footer8-footer-links">
                <Link to="/" className="footer8-link1 thq-body-small">
                  {props.link1}
                </Link>
                <Link
                  to="/solution-demo"
                  className="footer8-link2 thq-body-small"
                >
                  {props.link2}
                </Link>
                <a
                  href="mailto:info@storechoicy.com?subject="
                  className="footer8-link4 thq-body-small"
                >
                  {props.link4}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer8-credits">
          <div className="footer8-row">
            <span className="thq-body-small">{props.copyright}</span>
            <div className="footer8-footer-links1">
              <span className="thq-body-small">{props.privacyLink}</span>
              <span className="thq-body-small">{props.termsLink}</span>
              <span className="thq-body-small">{props.cookiesLink}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer8.defaultProps = {
  link7: 'Support',
  column2Title: 'Resources',
  copyright: '© 2023 Store Choicy. All rights reserved.',
  link9: 'Privacy Policy',
  link1: 'About Us',
  cookiesLink: '/cookies',
  link8: 'Terms of Service',
  link5: 'Blog',
  image1Alt: 'Store Choicy Logo',
  link6: 'FAQs',
  column1Title: 'Company',
  link3: 'Press',
  link2: 'Demo',
  termsLink: '/terms',
  link10: 'Cookies Policy',
  privacyLink: '/privacy',
  link4: 'Contact Us',
  image1Src:
    'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEzMDc3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  imageSrc: '/store_choicy_logo-200h.png',
  imageAlt: 'image',
  rootClassName: '',
}

Footer8.propTypes = {
  link7: PropTypes.string,
  column2Title: PropTypes.string,
  copyright: PropTypes.string,
  link9: PropTypes.string,
  link1: PropTypes.string,
  cookiesLink: PropTypes.string,
  link8: PropTypes.string,
  link5: PropTypes.string,
  image1Alt: PropTypes.string,
  link6: PropTypes.string,
  column1Title: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  termsLink: PropTypes.string,
  link10: PropTypes.string,
  privacyLink: PropTypes.string,
  link4: PropTypes.string,
  image1Src: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer8

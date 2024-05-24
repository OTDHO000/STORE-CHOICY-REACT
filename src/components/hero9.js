import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
              <span className="hero9-text2 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline hero9-button1">
              <span className="hero9-text3 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  action1: 'Get a Free Brand Audit',
  heading1: 'Unlock Your Digital Potential',
  action2: 'View Our Portfolio',
  image1Src:
    'https://images.unsplash.com/photo-1629134287416-1403dd88b791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjA5MzY3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Digital Creative Agency',
  content1:
    "We are a full-service digital creative agency dedicated to helping businesses thrive in the digital world. From web design to branding, we've got you covered.",
}

Hero9.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero9

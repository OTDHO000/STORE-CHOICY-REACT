import React from 'react'

import PropTypes from 'prop-types'

import './features7.css'

const Features7 = (props) => {
  return (
    <div className="features7-layout226 thq-section-padding">
      <div className="features7-max-width thq-section-max-width thq-grid-3">
        <div className="thq-flex-column">
          <span className="features7-over-title1 thq-body-small">
            {props.feature1Slogan}
          </span>
          <div className="thq-flex-column features7-content">
            <h3 className="features7-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features7-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <span className="features7-over-title2 thq-body-small">
            {props.feature2Slogan}
          </span>
          <div className="thq-flex-column features7-content1">
            <strong className="features7-title2 thq-heading-3">
              {props.feature2Title}
            </strong>
            <span className="features7-description2 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <span className="features7-over-title3 thq-body-small">
            {props.feature3Slogan}
          </span>
          <div className="thq-flex-column features7-content2">
            <strong className="features7-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <span className="features7-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features7.defaultProps = {
  feature1Description:
    'Our team of creative experts will work closely with you to develop a compelling brand strategy that resonates with your target audience and sets you apart from the competition.',
  feature3Description:
    'Using advanced deep learning models, we analyze various data points to determine the best location for your business. Our intelligent scoring system takes into account factors such as foot traffic, competition, and demographics to help you make informed decisions.',
  feature3Slogan: 'Optimizing your business location for success',
  feature2Title: 'Web Design',
  feature2Description:
    'We design and develop custom websites that not only look visually appealing but also function seamlessly to provide an exceptional user experience, ultimately helping you achieve your business goals.',
  feature3Title: 'Location Analysis',
  feature1Slogan: 'Crafting your unique brand identity',
  feature2Slogan: 'Building stunning websites that drive results',
  feature1Title: 'Branding Services',
}

Features7.propTypes = {
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features7

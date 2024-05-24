import React from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  return (
    <div className="features2-layout302 thq-section-padding">
      <div className="features2-max-width thq-section-max-width">
        <div className="features2-section-title thq-flex-column">
          <span className="thq-body-small">{props.slogan}</span>
          <h2 className="thq-heading-2">{props.sectionTitle}</h2>
          <p className="thq-body-large">{props.sectionDescription}</p>
        </div>
        <div className="features2-content">
          <div className="thq-grid-5 features2-row">
            <div className="features2-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features2-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features2-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
          <div className="features2-actions">
            <button className="thq-button-filled features2-button">
              <span className="thq-body-small">{props.mainAction}</span>
            </button>
            <button className="thq-button-outline features2-button1">
              <span className="thq-body-small">{props.secondaryAction}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1579618218242-f93c3033049f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjExMTI2MXw&ixlib=rb-4.0.3&q=80&w=200',
  slogan: 'Empowering Your Business Decisions',
  feature5ImageAlt: 'Data Insights Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1583912268179-ccc39663824a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjExMTI2MXw&ixlib=rb-4.0.3&q=80&w=200',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1444012183556-ad267375edb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjExMTI2MHw&ixlib=rb-4.0.3&q=80&w=200',
  feature3ImageAlt: 'Demographic Data Image',
  feature2Title: 'Competitor Information',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1501556466850-7c9fa1fccb4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjExMTI2MXw&ixlib=rb-4.0.3&q=80&w=200',
  mainAction: 'Get Started',
  feature4Description:
    'Generate clear and concise reports quickly to aid in decision-making processes.',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1665690399457-58110a2dbdac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjExMTI2MHw&ixlib=rb-4.0.3&q=80&w=200',
  feature2ImageAlt: 'Competitor Information Image',
  feature3Title: 'Demographic Data',
  feature4Title: 'Transparent Reports',
  feature1ImageAlt: 'Location Analysis Image',
  feature5Description:
    'Gain valuable data-driven insights to inform your business strategies effectively.',
  feature2Description:
    'Access competitor data to understand the competitive landscape in your chosen area.',
  feature1Title: 'Location Analysis',
  feature3Description:
    'Utilize demographic information to target the right audience for your business.',
  feature1Description:
    'Get detailed insights into vacant storefront locations using deep learning algorithms.',
  secondaryAction: 'Learn More',
  sectionDescription:
    'Explore the features that make Store Choicy the ideal platform for choosing the best location for your business.',
  sectionTitle: 'Key Features',
  feature5Title: 'Data Insights',
  feature4ImageAlt: 'Transparent Reports Image',
}

Features2.propTypes = {
  feature2ImageSrc: PropTypes.string,
  slogan: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  feature4Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature4Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature5Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  sectionDescription: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature5Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
}

export default Features2

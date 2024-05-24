import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1Description:
    'We create visually stunning websites that are optimized for performance and user experience.',
  feature3Description:
    'Our team of experts will help you establish a strong brand identity and design intuitive user interfaces.',
  feature3ImageAlt: 'Branding & UI/UX Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1491234323906-4f056ca415bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjA5MzY4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Branding & UI/UX',
  mainAction: 'Custom Web Design',
  feature1Title: 'Web Design & Development',
  feature1ImageAlt: 'Web Design Image',
  feature2ImageAlt: 'App Development Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjA5MzY4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: 'Our Features',
  feature2Description:
    'From concept to launch, we build custom mobile applications that meet your specific business needs.',
  feature2Title: 'App Development',
  feature3Title: 'Branding & UI/UX',
  sectionDescription:
    'Explore the key features that set us apart from other digital creative agencies.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1485988412941-77a35537dae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjA5MzY3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan: 'Crafting digital experiences that resonate with your audience.',
}

Features1.propTypes = {
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  mainAction: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Title: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features1

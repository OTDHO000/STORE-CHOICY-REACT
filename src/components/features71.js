import React from 'react'

import PropTypes from 'prop-types'

import './features71.css'

const Features71 = (props) => {
  return (
    <div className="features71-layout226 thq-section-padding">
      <div className="features71-max-width thq-section-max-width thq-grid-3">
        <div className="thq-flex-column">
          <div className="features71-content thq-flex-column">
            <h3 className="features71-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <div className="features71-container">
              <img
                alt={props.imageAlt7}
                src={props.imageSrc7}
                className="features71-image"
              />
            </div>
            <span className="features71-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="features71-content1 thq-flex-column">
            <strong className="features71-title2 thq-heading-3">
              {props.feature2Title}
            </strong>
            <div className="features71-container1">
              <img
                alt={props.imageAlt4}
                src={props.imageSrc4}
                className="features71-image1"
              />
            </div>
            <span className="features71-description2 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="features71-content2 thq-flex-column">
            <strong className="features71-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <div className="features71-container2">
              <img
                alt={props.imageAlt5}
                src={props.imageSrc5}
                className="features71-image2"
              />
            </div>
            <span className="features71-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features71.defaultProps = {
  imageAlt7: 'image',
  imageAlt1: 'image',
  feature3Slogan: 'Finding the perfect spot for your business',
  feature2Slogan: 'Building strong brand identities',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt4: 'image',
  imageSrc4: '/transparent-data-200h.jpg',
  feature2Title: 'Transparent Data Insights',
  imageSrc3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt2: 'image',
  feature3Title: 'One-Click Report Generation',
  imageAlt3: 'image',
  imageSrc1: '45166fef-723a-44b6-905b-c84a48d35201',
  imageAlt: 'image',
  imageSrc5: '/generate_repo-200h.jpg',
  feature1Slogan: 'Crafting visually stunning websites',
  imageAlt6: 'image',
  feature1Description:
    'Store Choicy uses deep learning to analyze vacant storefronts and generate a quantifiable "SCORE", helping users choose the best location for their business.',
  feature2Description:
    'Users can view detailed insights, such as competitor information and demographic data, behind each store score to make informed decisions.',
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt5: 'image',
  feature1Title: 'Intelligent Scoring System',
  feature3Description:
    'Generate detailed advisory reports with just one click using generative AI, making it quick and easy to develop effective business strategies.',
  imageSrc7: '/score-200h.jpg',
  imageSrc6: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Features71.propTypes = {
  imageAlt7: PropTypes.string,
  imageAlt1: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature2Slogan: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc4: PropTypes.string,
  feature2Title: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt2: PropTypes.string,
  feature3Title: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc5: PropTypes.string,
  feature1Slogan: PropTypes.string,
  imageAlt6: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Description: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt5: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageSrc6: PropTypes.string,
}

export default Features71

import React from 'react'

import PropTypes from 'prop-types'

import './gallery2.css'

const Gallery2 = (props) => {
  return (
    <div
      className={`gallery2-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery2-max-width thq-section-max-width">
        <div className="gallery2-section-title">
          <h2 className="gallery2-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery2-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <span className="gallery2-text2">{props.text}</span>
        <div className="gallery2-content">
          <div className="gallery2-container">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="gallery2-image"
            />
          </div>
          <div className="gallery2-container1">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="gallery2-image1"
            />
          </div>
          <div className="gallery2-container2">
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="gallery2-image2"
            />
          </div>
          <div className="gallery2-container3">
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="gallery2-image3"
            />
          </div>
        </div>
        <div className="gallery2-container4">
          <div className="gallery2-container5">
            <div className="gallery2-content1">
              <span className="gallery2-text3">{props.text1}</span>
              <div className="gallery2-container6">
                <img
                  alt={props.imageAlt4}
                  src={props.imageSrc4}
                  className="gallery2-image4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery2.defaultProps = {
  imageSrc2: '/hkstp_logo-200h.png',
  image3Src:
    'https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjExMTQ2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  text1: 'Consulted Industry Player',
  imageAlt4: 'image',
  image1Alt: 'Location Analysis Image',
  imageSrc4: '/jll_logo-200h.png',
  imageAlt1: 'image',
  imageSrc: '/smart-living-logool-01-200h.png',
  image4Src:
    'https://images.unsplash.com/photo-1566249468358-e6277590f112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjExMTQ2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Gallery',
  imageAlt: 'image',
  image1Src:
    'https://images.unsplash.com/photo-1645075960701-573cbc669de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjExMTQ2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  text: 'Text',
  imageSrc1: '/location_matters-200h.jpg',
  imageSrc3: '/kteo-logo-200h.png',
  content1: "Explore our platform's features through the images below.",
  imageAlt3: 'image',
  image3Alt: 'Demographic Data Image',
  rootClassName: '',
  imageAlt2: 'image',
  image2Alt: 'Competitor Information Image',
  image4Alt: 'Intelligent Scoring System Image',
  image2Src:
    'https://images.unsplash.com/photo-1597242261552-e4bfc7618aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjExMTQ2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Gallery2.propTypes = {
  imageSrc2: PropTypes.string,
  image3Src: PropTypes.string,
  text1: PropTypes.string,
  imageAlt4: PropTypes.string,
  image1Alt: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  image4Src: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt: PropTypes.string,
  image1Src: PropTypes.string,
  text: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc3: PropTypes.string,
  content1: PropTypes.string,
  imageAlt3: PropTypes.string,
  image3Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt2: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Src: PropTypes.string,
}

export default Gallery2

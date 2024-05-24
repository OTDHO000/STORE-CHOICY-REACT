import React from 'react'

import PropTypes from 'prop-types'

import './cta4.css'

const CTA4 = (props) => {
  return (
    <div
      className={`cta4-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="cta4-max-width thq-section-max-width">
        <div className="cta4-container1 thq-flex-row">
          <div className="cta4-column">
            <span className="thq-heading-2">{props.content1}</span>
            <p className="thq-body-small">{props.content2}</p>
            <div className="cta4-actions">
              <button type="button" className="thq-button-filled">
                {props.action1}
              </button>
              <button type="button" className="thq-button-outline">
                {props.action2}
              </button>
            </div>
          </div>
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="cta4-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

CTA4.defaultProps = {
  rootClassName: '',
  image1Src:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEwNTM2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  content2: 'Explore our services and start creating today',
  action2: 'View Services',
  image1Alt: 'Digital Project Image',
  content1: 'Ready to bring your digital project to life?',
  action1: 'Get in touch',
}

CTA4.propTypes = {
  rootClassName: PropTypes.string,
  image1Src: PropTypes.string,
  content2: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA4

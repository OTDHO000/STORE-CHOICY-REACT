import React from 'react'

import PropTypes from 'prop-types'

import './services-card.css'

const ServicesCard = (props) => {
  return (
    <div className="services-card">
      <div className="services-card-container">
        <div className="services-card-container1">
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="services-card-icon"
          >
            <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
          </svg>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="services-card-icon2"
          >
            <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
          </svg>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="services-card-icon4"
          >
            <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
          </svg>
        </div>
      </div>
      <span className="services-card-text">{props.text01}</span>
      <span className="services-card-text1">{props.text0101}</span>
      <span className="services-card-text2">{props.text01}</span>
      <span className="services-card-text3">{props.text0101}</span>
    </div>
  )
}

ServicesCard.defaultProps = {
  text01: 'Transparent Data Insights',
  text0101:
    'Users can not only view the overall store score but also delve into the exact details behind it. For instance, they can access specific information about competitors and detailed demographic data of the region. We provide comprehensive data insights to help users make informed decisions.',
}

ServicesCard.propTypes = {
  text01: PropTypes.string,
  text0101: PropTypes.string,
}

export default ServicesCard

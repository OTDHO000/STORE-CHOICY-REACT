import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <span className="app-component-text">
        <span>Find the BEST Location for your restaurant!</span>
        <br></br>
        <span>
          Discover prime spots with Store Choicy’s comprehensive location
          analysis.
        </span>
        <br></br>
      </span>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent

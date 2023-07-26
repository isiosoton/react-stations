import * as React from 'react'
import PropTypes from 'prop-types'

export function DogImage(props) {
  return (
    <div>
      <img src={props.url} />
    </div>
  )
}

DogImage.propTypes = {
  url: PropTypes.string,
}

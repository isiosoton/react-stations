import * as React from 'react'
import PropTypes from 'prop-types'

export const BreedsSelect = props => {
  return (
    <div>
      <label htmlFor="breedslist">BreedsList</label>
      <select
        id="breedslist"
        onChange={e => props.select(e.target.value)}
        value={props.value}
      >
        {props.breeds &&
          props.breeds.map(breed => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
      </select>
      <button onClick={props.button}>表示</button>
    </div>
  )
}

BreedsSelect.propTypes = {
  select: PropTypes.func,
  button: PropTypes.func,
  breeds: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
}

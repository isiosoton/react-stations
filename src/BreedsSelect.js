import * as React from 'react'
import PropTypes from 'prop-types'

export const BreedsSelect = props => {
  return (
    <div>
      <form>
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
      </form>
    </div>
  )
}

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string),
  select: PropTypes.func,
  value: PropTypes.string,
}

import * as React from 'react'

export const BreedsSelect = props => {
  const [selectedBreed, setSelectedBreed] = React.useState(null)

  return (
    <div>
      <form>
        <label htmlFor="breedslist">BreedsList</label>
        <select
          id="breedslist"
          onChange={e => setSelectedBreed(e.target.value)}
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

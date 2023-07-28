import * as React from 'react'
import { BreedsSelect } from './BreedsSelect'

export function DogListContainer() {
  const [selectedBreed, setSelectedBreed] = React.useState(null)
  const [breeds, setBreeds] = React.useState(null)
  const [dogImages, setDogImages] = React.useState(null)

  React.useEffect(() => {
    const fetch_data = async () => {
      const responce = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await responce.json()
      const breedNames = Object.keys(data.message)
      setBreeds(breedNames)
    }
    fetch_data()
  }, [])

  const fetch_images = async () => {
    const max_image = 12
    const fetch_url = `https://dog.ceo/api/breed/${selectedBreed}/images/${max_image}`
    const responce = await fetch(fetch_url)
    const data = await responce.json()
    setDogImages(data.message)
  }

  return (
    <div className="doglistcontainer">
      <div>
        <BreedsSelect
          breeds={breeds}
          select={setSelectedBreed}
          value={selectedBreed}
          button={fetch_images}
        />
      </div>
      <div>
        {dogImages &&
          dogImages.map(url => (
            <div key={url}>
              <img src={url} />
            </div>
          ))}
      </div>
    </div>
  )
}

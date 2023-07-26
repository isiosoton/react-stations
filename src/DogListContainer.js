import * as React from 'react'
import { BreedsSelect } from './BreedsSelect'

export function DogListContainer() {
  // 初回マウント後にfetch関数を呼び出し、stateを更新
  const [breeds, setBreeds] = React.useState(null)

  React.useEffect(() => {
    const fetch_data = async () => {
      const responce = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await responce.json()
      const breedNames = Object.keys(data.message)
      setBreeds(breedNames)
    }
    fetch_data()
  }, [])
  return <BreedsSelect breeds={breeds} />
}

import * as React from 'react'

export function DogListContainer() {
  const [breeds, setBreeds] = React.useState(0)
  React.useEffect(() => {
    let getbreeds = fetch('https://dog.ceo/api/breeds/list/all')
    getbreeds = getbreeds.json()
    setBreeds(getbreeds.message)
  }, [])
  return <p>{breeds}</p>
}

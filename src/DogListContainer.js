import * as React from 'react'

export function DogListContainer() {
  const [breeds, setBreeds] = React.useState(null)
  React.useEffect(() => {
    ;() => {
      let getbreeds = fetch('https://dog.ceo/api/breeds/list/all')
      getbreeds = getbreeds.json()
      getbreeds = Object.keys(getbreeds.message)
      setBreeds(getbreeds)
    }
  }, [])
  return <p>{breeds}</p>
}

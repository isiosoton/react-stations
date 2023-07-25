// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header'
import { DogImage } from './DogImage'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_2558.jpg',
  )
  const changeDogUrl = async () => {
    let getdogurl = await fetch('https://dog.ceo/api/breeds/image/random')
    getdogurl = await getdogurl.json()
    setDogUrl(getdogurl.message)
  }
  return (
    <div>
      <Header />
      <DogImage url={dogUrl} />
      <Description button={changeDogUrl} />
      <DogListContainer />
    </div>
  )
}

// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header'
// import { Description } from './Description'
import { DogImage } from './DogImage'

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
      <main>
        <div>
          <p>犬の画像を表示するサイトです</p>
        </div>
        <DogImage url={dogUrl} />
        <div>
          <button onClick={changeDogUrl}>更新</button>
        </div>
      </main>
    </div>
  )
}

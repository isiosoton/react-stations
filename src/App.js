// DO NOT DELETE

import * as React from 'react'
import './App.css'

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
      <header className="header">
        <h1 className="title">Dogアプリ</h1>
      </header>
      <main>
        <div>
          <p>犬の画像を表示するサイトです</p>
        </div>
        <div>
          <img src={dogUrl} />
        </div>
        <div>
          <button onClick={changeDogUrl}>更新</button>
        </div>
      </main>
    </div>
  )
}

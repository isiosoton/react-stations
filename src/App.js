// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <main>
        <p>犬の画像を表示するサイトです</p>
        <img src="https://images.dog.ceo/breeds/deerhound-scottish/n02092002_2558.jpg" />
      </main>
    </div>
  )
}

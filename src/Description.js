import * as React from 'react'
import { DogImage } from './DogImage'

export function Description(props) {
  return (
    <main>
      <div>
        <p>犬の画像を表示するサイトです</p>
      </div>
      <DogImage url={props.url} />
      <div>
        <button onClick={props.button}>更新</button>
      </div>
    </main>
  )
}

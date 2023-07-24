import * as React from 'react'

export function Description(props) {
  return (
    <main>
      <div>
        <p>犬の画像を表示するサイトです</p>
      </div>

      <div>
        <button onClick={props.button}>更新</button>
      </div>
    </main>
  )
}

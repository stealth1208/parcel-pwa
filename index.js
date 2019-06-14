import React from 'react';
import ReactDom from 'react-dom'


if (`serviceWorker` in navigator) {
  window.addEventListener(`load`, () => {
    navigator.serviceWorker.register(`service-worker.js`)

  })
}

function App() {
  return (
    <div>Hello world</div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))

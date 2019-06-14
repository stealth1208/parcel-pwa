import React from 'react';
import ReactDom from 'react-dom';


window.addEventListener(`load`, () => {
  if (`serviceWorker` in navigator) {
    navigator.serviceWorker.register(`service-worker.js`)
  } else {
    throw new Error ('Service worker is not supported!');
  }

  if ('PushManager' in window)  {
    askPermission();
  } else {
    throw new Error ('Push manager is not supported!');
  }
});

function askPermission() {
  Notification.requestPermission()
    .then((permission) => {
      console.log('permission', permission)
    })
    .catch(error => {
      throw new Error(error)
    })
}

function App() {
  return (
    <div>Hello world</div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))

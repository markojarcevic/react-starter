import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/Home';
import './index.scss';

function App() {
  return (
    <Home />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

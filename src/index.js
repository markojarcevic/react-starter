import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import './index.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

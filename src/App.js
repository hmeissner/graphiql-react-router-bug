import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GraphiQL from 'graphiql'
import 'graphiql/graphiql.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/" render={() => (
          <div style={{ height: '100vh', width: '100%' }}>
          {console.log('I rendered')}
          <GraphiQL
            fetcher={(graphQLParams) => {
              return fetch(
                'https://swapi.graph.cool/',
                {
                  method: 'post',
                  // headers,
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(graphQLParams),
                }
              ).then(response => response.json());
            }}
          /></div>
        )} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import TodoController from './containers/TodoController/TodoController';



class App extends Component {
  render() {
    return (
      <Layout>
        <TodoController />
      </Layout>
    );
  }
}

export default App;

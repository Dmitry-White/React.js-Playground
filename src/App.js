import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div id='page-body'>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/about'>
              <AboutPage />
            </Route>
            <Route exact path='/articles'>
              <ArticlesPage />
            </Route>
            <Route exact path='/articles/:name'>
              <ArticlePage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </div>
        </div>
      </BrowserRouter >
    )
  }
}

export default App;

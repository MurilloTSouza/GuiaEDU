import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MapPage from './pages/mapPage/MapPage'
import Navbar from './pages/navbar/Navbar'
import RankingPage from './pages/rankingPage/RankingPage'
import CompararPage from './pages/compararPage/CompararPage'

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div id="App">

        <div className="nav-bar">
          <Navbar />
        </div>

        <div id="app-content">
          <Switch>
            <Route exact path="/" component={MapPage} />
            <Route path="/ranking" component={RankingPage} />
            <Route path="/comparar" component={CompararPage} />
          </Switch>
        </div>

      </div>
    </BrowserRouter>
  )
}


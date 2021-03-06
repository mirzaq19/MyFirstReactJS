import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';

function Home() {
  return <h1>Halaman Home</h1>
}

function Users() {
  return (
    <React.Fragment>
      <h1>Halaman Users</h1>
      <ul>
        <li><Link to='/users/mirzaq'>Mirzaq</Link></li>
        <li><Link to='/users/budi'>Budi</Link></li>
        <li><Link to='/users/rendi'>Rendi</Link></li>
      </ul>
    </React.Fragment>
  )
}

function DetailView({ match }) {
  return <h1>Ini halaman User {match.params.name}</h1>
}

function About(){
  return <h1>Halaman About</h1>
}

function NoMatch() {
  return <h1>404,Halaman tidak ditemukan</h1>
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <main className="container">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/users' exact component={Users} />
              <Route path='/about' component={About} />
              <Route path='/users/:name' component={DetailView} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

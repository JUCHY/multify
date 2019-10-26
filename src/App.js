import React from 'react';
import Layout from './components/Layout'
import {Link} from 'react-router-dom'

import './App.css';




export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }

  }


  render(){
    return (
      <div>
      <h1>This is an example of the Authorization Code flow</h1>
      <Link to='/login'>
      <div  className="btn btn-primary">Log in with Spotify</div>
      </Link>
    </div>
      
    );
  }
}

import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';

import axios from 'axios';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/thegroovetrain')
      .then(response => {
        this.setState({data: response.data});
        console.log(this.state.data)

        axios.get(response.data.followers_url)
          .then(response => {
            this.setState({followers: response.data});
            console.log(this.state.followers)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <UserCard data={this.state.data} followers={this.state.followers}/>
    )
  }

}

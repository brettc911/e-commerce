import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';



// Imported Styles:
import '../style/reset.css';
import '../style/global.css';

//Imported Images:
import bannerImg from '../images/banner.png';

//Imported Components:
import Filter from './Filter'

//Imported Data:
import allWatches from '../data/watch_data'


// STYLES:
// ________________________________________________

const Banner = styled.div`
  height: 397px;
  display: flex;
  align-items: center;
  padding: 0 41px;
  background: url(${bannerImg});
`
  const H1 = styled.h1`
    color: white;
    margin-left: 199px;
    font-family: 'Georgia';
    font-size: 47px;
    font-weight: bold;
    text-transform: capitalize;
  `


// FUNCTIONALITY:
// ________________________________________________



export default class SingleWatch extends Component {
  constructor(props){
    super(props)

    this.state = {
      watch: {},
      type: undefined
    }

  }

  componentDidMount(){
    let watchId = this.props.match.params
    allWatches.forEach(w => {
      w.id === watchId.id ? this.setState({watch: w}) : console.log('couldnt find watch')
    })
    if (this.props.match.params.type === 'seasonal') {
      this.setState({type: `${this.props.match.params.type} Watches`})
    } else {
      this.setState({type: `${this.props.match.params.type}'s Watches`})
    }
    window.scroll(0,0)
  }


  render() {
    return (
      <div className="container">
        <Banner>
          <H1>{this.state.type}</H1>
        </Banner>
        <p>{this.state.watch.name}</p>
      </div>
    );
  }
}

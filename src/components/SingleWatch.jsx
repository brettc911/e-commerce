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
  `


// FUNCTIONALITY:
// ________________________________________________



export default class Men extends Component {
  constructor(props){
    super(props)

    this.state = {
      watch: {}
    }

  }

  componentDidMount(){
    let watchId = this.props.match.params
    allWatches.forEach(w => {
      w.id === watchId.id ? this.setState({watch: w}) : console.log('couldnt find watch')
    })
  }


  render() {
    return (
      <div className="container">
        <Banner>
          <H1>Men's Watches</H1>
        </Banner>
        <p>{this.state.watch.name}</p>
      </div>
    );
  }
}

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

// 1) Make this a collections component
// 2) Have: men, women, kids, fall...
// 3) Make a collectionType component with all the types (kids, mens etc.)
//    - Routing = /collections/collectionType
// 4) In collectionType component:
//    - Dynamically generate content based on route i.e.(/collections/men)
//    - Change the Banner text and image, and the watches displayed


export default class Collections extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }


  render() {
    return(
      <div className="container">
        <Link to='/collections/men'>Men's</Link>
        <Link to='/collections/women'>Women's</Link>
        <Link to='/collections/kids'>Kids</Link>
        <Link to='/collections/seasonal'>Seasonal</Link>
      </div>
    )
  }
}

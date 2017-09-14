import React, { Component } from 'react';
import styled from 'styled-components';

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

const mensWatches = []
allWatches.forEach(w => {
  if (w.sex === 'men') mensWatches.push(w)
})

// 1) GET ONLY MEN'S WATCHES FROM DATA
// 2) PASS MEN'S WATCHES DOWN TO FILTER Component

export default class Men extends Component {
  render() {
    return (
      <div className="container">
        <Banner>
          <H1>Men's Watches</H1>
        </Banner>
        <Filter watches = {mensWatches}/>
      </div>
    );
  }
}

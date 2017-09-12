import React, { Component } from 'react';
import styled from 'styled-components';

// Imported Styles:
import '../style/reset.css';
import '../style/global.css';

//Imported Images:
import bannerImg from '../images/banner.png';

// STYLES:
// ________________________________________________

const Banner = styled.div`
  height: 397px;
  display: flex;
  align-items: center;
  padding: 0 41px;
  background-image: url(${bannerImg});
`
const H1 = styled.h1`
  color: white;
  margin-left: 199px;
  font-family: 'Georgia';
  font-size: 47px;
  font-weight: bold;
`

export default class Men extends Component {
  render() {
    return (
        <Banner>
          <H1>Men's Watches</H1>
        </Banner>
    );
  }
}

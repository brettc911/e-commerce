import React, { Component } from 'react';
import styled from 'styled-components';

// Imported Styles:
import '../style/reset.css';
import '../style/global.css';

// Imported Images:
import hero from '../images/hero.png'

//   ~   ~   ~
//  ~  STYLES  ~
//   ~   ~   ~

const Container = styled.section`
  background: pink;
`


export default class Sale extends Component {
  render() {
    return (
      <Container>
      </Container>
    );
  }
}

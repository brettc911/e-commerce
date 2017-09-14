import React, { Component } from 'react';
import styled from 'styled-components';

// Imported Styles:
import '../style/reset.css';
import '../style/global.css';

// Imported Images:


// STYLES:
// ________________________________________________

const Container = styled.section`
  background: pink;
`


export default class WatchDisplay extends Component {
  constructor(props){
    super(props)

    const watches = this.props.watches
    console.log(watches);
  }

  render() {

    return (
      <Container>
        // DISPLAY SOME WATCHES
      </Container>
    );
  }
}

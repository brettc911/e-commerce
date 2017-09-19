import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

// Imported Styles:
import '../style/reset.css';
import '../style/global.css';

// Imported Images:
import empty from '../images/heart.svg'
import solid from '../images/colored_heart.png'

// STYLES:
// ________________________________________________

const Container = styled.section`

`
const Results = styled.ul`
  padding: 18px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const WatchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 456px;
  padding: 0 20px;
`

  const Watch = styled.li`
    padding: 12px;
    border: #fff solid 6px;
    width: 308px;
    height: 456px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &:hover{
      border: #CDB378 solid 6px;
    }
  `
    const Image = styled.img`
      height: 259px;
      width: 259px;
    `
    const Name = styled.p`
      text-align: center;
      margin: 0 40px;
    `
    const Price = styled.h1`
      font-family: 'Georgia';
      color: #033D3C;
      font-weight: bold;
      font-size: 20px;
      &:before{
        content: "$"
      }
    `
const LoadMore = styled.div`
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
    button{
      width: 33%;
      height: 54px;
    }
`

export default class WatchDisplay extends Component {
  constructor(props){
    super(props)

    // FUNCTIONS:
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this)

    // STATE:
    this.state = {

    }
  }
  // Toggles the color of the heart icon from empty to solid
  handleFavoriteChange(e){
    e.target.className === 'empty' ? e.target.className = 'solid' : e.target.className = 'empty'
  }

  render() {
    // Map over the array of watches
    let watch = this.props.watches.map((w) => {
      let sex = 'men'
      if (w.sex !== 'men') sex = 'women'
      return (
        <WatchContainer key={w.id}>
            <Watch>
              <Link className="inner_container" to={`/${sex}/${w.id}`}>
                <Image src={w.img}></Image>
                <Name>{w.name}</Name>
                <Price>{w.price}</Price>
              </Link>
              <div className='empty' onClick={this.handleFavoriteChange}></div>
            </Watch>
        </WatchContainer>
      )
    })
    // Individual Watch Container
    return (
      <Container>
        <Results >
          {watch}
        </Results>
        <LoadMore>
          <button className='primary-button'>Load More</button>
        </LoadMore>
      </Container>
    );
  }
}

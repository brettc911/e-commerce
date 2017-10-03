import React, { Component } from 'react';
import styled from 'styled-components';

// Import Router
import { Link } from 'react-router-dom';

// Imported Styles:
import '../style/reset.css';
import '../style/global.css';

//Imported Images:
import home_hero from '../images/home_hero.png';
import ad1 from '../images/ad1.png';
import ad2 from '../images/ad2.png';
import shop_men from '../images/shop_men.png';
import shop_women from '../images/shop_women.png';

// STYLES:
// ________________________________________________
const Hero = styled.div`
  background: url(${home_hero});
  height: 552px;
  padding: 164px 0 174px 13%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
    p{
      font-size: 18px;
      color: #fff;
    }
`
const H3 = styled.h1`
  font-family: 'Georgia';
  font-size: 54px;
  color: white;
  font-weight: bold;
`
const Button = styled.button`
  height: 54px;
  width: 308px;
  font-size: 18px;
  background: #B59E6A;
`
const Section1 = styled.section`
  padding-left: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 672px;
`
  const Ad1 = styled.div`
    width: 50%;
    height: 595px;
    position: relative;
  `
    const Box1 = styled.div`
      top: 176px;
      width: 494px;
      height: 417px;
      position: absolute;
      background: #F7F3EA;
    `
    const Box2 = styled.div`
      left: 48px;
      width: 448px;
      height: 456px;
      position: absolute;
      z-index: 2;
      border: solid 6px #CDB378;
    `
    const Box3 = styled.div`
      left: 79px;
      top: 28px;
      width: 467px;
      height: 492px;
      position: absolute;
      z-index: 3;
      background: url(${ad1});
    `
  const Arrivals = styled.div`
    padding-left: 96px;
    width: 50%;
      p{
        font-size: 16px;
        color: #B8B8B8;
        font-family: 'georgia';
      }
      button{
        text-transform: uppercase;
        font-size: 20px;
        width: 308px;
        height: 54px;
        margin-top: 34px;
      }
  `
    const H2 = styled.h2`
      font-style: italic;
      font-size: 16px;
      letter-spacing: 6.5px;
      color: #B8B8B8;
    `
    const H1 = styled.h1`
      margin: 15px 0;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 40px;
      color: #7E7E7E;
    `
  const Section2 = styled.div`
    padding-left: 52px;
    width: 100%;
    height: 492px;
    background: url(${ad2});
  `
    const Fall = styled.div`
      padding: 154px 96px;
      color: #fff;
      float: right;
      width: 720px;
      background: rgba(121, 106, 72, 0.8);
      height: 100%;
        h1{
          margin: 15px 0;
          font-weight: bold;
          text-transform: capitalize;
          font-size: 54px;
          font-family: 'georgia';
          &after{
            content: '';
            width: 30px;
            height: 20px;
            display: block;
            background: blue;
          }
        }
        h2{
          font-style: italic;
          font-size: 16px;
          letter-spacing: 6.5px;
          margin-bottom: 8px;
          }
        p{
          font-size: 18px;
        }
        button{
          margin-top: 30px;
          background: none;
          border: #fff solid 1px;
          padding: 14px 34px;
        }
    `
const Section3 = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 20px 93px 20px;
  a{
    cursor: default;
  }
  button{
    cursor: pointer;
  }
`
  const ShopMen = styled.div`
    background: url(${shop_men}) no-repeat;
    background-position: center;
    height: 307px;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1, button{
      margin: 0px 0px 30px 72px;
    }
    button{
      background: none;
      border: #7E7E7E solid 1px;
      color: #7E7E7E;
      padding: 14px 50px;
      font-size: 20px;
    }
  `
  const ShopWomen = styled.div`
    background: url(${shop_women}) no-repeat;
    background-position: center;
    height: 307px;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1, button{
      margin: 0px 0px 30px 72px;
    }
    button{
      background: none;
      border: #7E7E7E solid 1px;
      color: #7E7E7E;
      padding: 14px 50px;
      font-size: 20px;
    }
  `

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
       <Hero>
         <H3>Explorer Worthy</H3>
         <p>We have timeless & fashionable selections that will last<br></br> you through the years to come. </p>
         <Link to='/collections/ men'><Button className='primary-button'>Shop Men's Watches</Button></Link>
       </Hero>
       <Section1>
         <Ad1>
           <Box1></Box1>
           <Box2></Box2>
           <Box3></Box3>
         </Ad1>
         <Arrivals>
           <H2>// New Arrivals </H2>
           <H1>We’ve Got Some<br></br>Exciting New Arrivals</H1>
           <p>Get 10% off new arrivals using promo code PARIS20</p>
           <button className='primary-button'>See What's New</button>
         </Arrivals>
       </Section1>
       <Section2>
         <Fall>
           <h2>// 2018 Designer Showcase </h2>
           <h1>Fall Collection</h1>
           <p>We have timeless & fashionable selections that will last you through the years to come. </p>
           <button className='primary-button'>Shop Collections</button>
       </Fall>
       </Section2>
       <Section3>
         <ShopMen>
           <H1>Men's<br></br> Watches</H1>
           <Link to='/collections/men'><button className='primary-button'>Shop</button></Link>
         </ShopMen>
         <ShopWomen>
           <H1>Women's<br></br> Watches</H1>
          <Link to='/collections/women'><button className='primary-button'>Shop</button></Link>
         </ShopWomen>
       </Section3>
      </div>
    );
  }
}

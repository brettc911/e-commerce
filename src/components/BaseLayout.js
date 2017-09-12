import React, { Component } from 'react';
import styled from 'styled-components';

// Imported Styles:
import '../style/reset.css';
import '../style/global.css';

//Imported Images:
import magGlass from '../images/mag-glass.svg';
import heart from '../images/heart.svg';
import bag from '../images/bag.svg';
import logoShape from '../images/logo.svg';
import bannerImg from '../images/banner.png';

// Import Router
import { Link } from 'react-router-dom';

// STYLES:
// ________________________________________________


const UtilNav = styled.div`
 height: 54px;
 padding: 0 62px;
 background: #F9F9F9;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`
  const Icon = styled.img`
   height: 24px;
   margin-left: 19px;
  `
  const SpanIcon = styled.span`
   height: 30px;
   margin-left: 19px;
   border-left: 2px solid #BFBFBF;
  `

const Header = styled.header`
  height: 91px;
  padding: 0 41px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`
    const Logo = styled.div`
      height: 91px;
      display: flex;
      align-items: center;
    `
    const MainNav = styled.div`
      height: 91px;
      display: flex;
      justify-content: space-between;
      align-items: center;
        a{
          padding: 20px;
        }
    `
const Banner = styled.div`
  height: 397px;
  display: flex;
  align-items: center;
  padding: 0 41px;
  background-image: url(${bannerImg});

`
const Shape = styled.img`
  height: 40px;
  margin-right: 10px;
`

const Footer = styled.footer`
  background: red;
`
const H2 = styled.h1`
  color: black;
  font-size: 29px;
  font-family: 'Georgia';
`
const H1 = styled.h1`
  color: white;
  margin-left: 199px;
  font-family: 'Georgia';
  font-size: 47px;
  font-weight: bold;
`
const P = styled.h1`
`



export default class BaseLayout extends Component {
  render() {
    return (
      <div className='container'>
        <UtilNav className='util-nav'>
          <Link to='/account'>My Account</Link>
          <SpanIcon></SpanIcon>
          <Icon src={magGlass}></Icon>
          <Icon src={heart}></Icon>
          <Icon src={bag}></Icon>
        </UtilNav>
        <Header>
          <Logo>
            <Shape src={logoShape}></Shape>
            <H2>Alex + Co.</H2>
          </Logo>
          <MainNav className='main-nav'>
            <Link to='/men'>Men's</Link>
            <Link to='/women'>Women's</Link>
            <Link to='/collections'>Collections</Link>
            <Link to='/sales'>Sale</Link>
            <Link to='/press'>Press</Link>
          </MainNav>
        </Header>
        <Banner>
          <H1>Men's Watches</H1>
          <P></P>
        </Banner>
        {this.props.children}
        <Footer>
          <H1>footer</H1>
        </Footer>
      </div>
    );
  }
}

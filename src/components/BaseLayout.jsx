import React, { Component } from 'react';
import styled from 'styled-components';

// Imported Styles:
import '../style/reset.css';
import '../style/global.css';

//Imported Images:
import mag_glass from '../images/mag-glass.svg';
import heart from '../images/heart.svg';
import bag from '../images/bag.svg';
import logo_shape from '../images/logo.svg';
import footer_pattern from '../images/footer_pattern.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import pinterest from '../images/pinterest.png';
import twitter from '../images/twitter.png';

// Import Router
import { Link } from 'react-router-dom';

// STYLES:
// ________________________________________________

const UtilNav = styled.div`
 height: 54px;
 padding: 0 62px;
 background: #f0f0f0;
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
// ________________________________________________

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
    const H2 = styled.h1`
      color: #033D3C;
      font-size: 29px;
      font-family: 'Georgia';
    `
    const Shape = styled.img`
      height: 40px;
      margin-right: 10px;
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
// ________________________________________________

const SignupDiv = styled.div`
  height: 217px;
  padding: 0 141px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f0f0;
  background-image: url(${footer_pattern});
`
  const H3 = styled.h1`
    color: #033D3C;
    font-size: 29px;
    font-family: 'Georgia';
  `
  const Form = styled.form`
    width: 530px;
    height: 54px;
    display: flex;
    flex-direction: row;
    >input{
      height: 100%;
      width: 59%;
      border: none;
      padding: 0 0 0 35px;
      font-size: 14px;
    }
    >button{
      float: right;
      width: 185px;
      height: 100%;
    }
  `

const Footer = styled.footer`
  height: 161px;
  padding: 0 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`
  const SocialMedia = styled.div`
    >img{
      padding-right: 31px;
    }
  `



export default class BaseLayout extends Component {
  render() {
    return (
      <div className='container'>
        <UtilNav className='util-nav'>
          <Link to='/account'>My Account</Link>
          <SpanIcon></SpanIcon>
          <Icon src={mag_glass}></Icon>
          <Icon src={heart}></Icon>
          <Icon src={bag}></Icon>
        </UtilNav>

        <Header>
          <Link to='/'>
            <Logo>
              <Shape src={logo_shape}></Shape>
              <H2>Alex + Co.</H2>
            </Logo>
          </Link>

          <MainNav className='main-nav'>
            <Link to='/men'>Men's</Link>
            <Link to='/women'>Women's</Link>
            <Link to='/collections'>Collections</Link>
            <Link to='/sales'>Sale</Link>
            <Link to='/press'>Press</Link>
          </MainNav>
        </Header>

        {this.props.children}

        <SignupDiv>
          <H3>Get the scoop on new arrivals, deals, & events</H3>
            <Form>
              <input type="text" name="" placeholder="Enter your email"/>
              <button className="primary-button">sign up</button>
            </Form>
        </SignupDiv>
        <Footer>
          <SocialMedia>
            <img src={instagram}></img>
            <img src={facebook}></img>
            <img src={pinterest}></img>
            <img src={twitter}></img>
          </SocialMedia>
          <MainNav className='main-nav'>
            <Link to='/men'>Men's</Link>
            <Link to='/women'>Women's</Link>
            <Link to='/collections'>Collections</Link>
            <Link to='/sales'>Sale</Link>
            <Link to='/press'>Press</Link>
          </MainNav>
        </Footer>
      </div>
    );
  }
}

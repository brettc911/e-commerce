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

// Make banner img = to collection type

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
    text-transform: capitalize;
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
//    - Change sex to type

const mensWatches = []
const womensWatches = []
const kidsWatches = []
const seasonalWatches = []

allWatches.forEach(w => {
  if (w.type === 'men') mensWatches.push(w)
  if (w.type === 'women') womensWatches.push(w)
  if (w.type === 'kids') womensWatches.push(w)
  if (w.type === 'seasonal') womensWatches.push(w)
})


export default class CollType extends Component {
  constructor(props){
    super(props)

    // FUNCTIONS:
    this.handleTypeChange = this.handleTypeChange.bind(this)

    // STATE:
    this.state = {
      type: undefined,
      watches: [],
    }
  }

  handleTypeChange(path){
    const mensWatches = []
    const womensWatches = []
    const kidsWatches = []
    const seasonalWatches = []

    if (path === 'men') {
      allWatches.forEach(w => {
        if (w.type === 'men') mensWatches.push(w)
      })
      this.setState({watches: mensWatches})
    }

    if (path === 'women') {
      allWatches.forEach(w => {
        if (w.type === 'women') womensWatches.push(w)
      })
      this.setState({watches: womensWatches})
    }
  }

  componentWillMount(){

    if (this.props.match.params.type === 'seasonal') {
      this.setState({type: `${this.props.match.params.type} Watches`})
    } else {
      this.setState({type: `${this.props.match.params.type}'s Watches`})
    }
    this.handleTypeChange(this.props.match.params.type)
    window.scroll(0,0)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.match.params.type === 'seasonal') {
      this.setState({type: `${nextProps.match.params.type} Watches`})
    } else {
      this.setState({type: `${nextProps.match.params.type}'s Watches`})
    }
    this.handleTypeChange(nextProps.match.params.type)
    window.scroll(0,0)
  }



  render() {
    return (
      <div className="container">
        <Banner>
          <H1>{this.state.type}</H1>
        </Banner>
        <Filter watches = {this.state.watches}/>
      </div>
    )
  }
}

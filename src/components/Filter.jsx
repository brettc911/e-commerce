import React, { Component } from 'react';
import styled from 'styled-components';

// Imported Styles:
import '../style/reset.css';
import '../style/global.css';

//Imported Images:
import drop_arrow from '../images/drop_arrow.png';

//Imported Components:
import WatchDisplay from './WatchDisplay'

// STYLES:
// ________________________________________________

const FilterForm = styled.form`
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
    div{
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
      margin: 65px;
    }
    select{
      color: #6E6E6E;
      border: none;
      display: block;
      background: url(${drop_arrow}) no-repeat 100% center;
      font-size: 18px;
      font-weight: bold;
      padding-left: 3px;
      padding-right: 18px;

    }
`
  const H2 = styled.h2`
    font-size: 18px;
  `

export default class Filter extends Component {
  constructor(props){
    super(props)


    // FUNCTIONS:
    this.handleWatchFiltering = this.handleWatchFiltering.bind(this)
    this.handleStyleChange = this.handleStyleChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)

    // STATE:
    this.state = {
      displayWatches: [],
      style: ['casual','business'],
      color: ['black', 'gold', 'white'],
      size: ['small', 'medium', 'large'],
      price: ['1', '1000']
    }
  }

  handleWatchFiltering() {

    let filteredWatches = []

    this.props.watches.forEach(w => {

      let style = false
      let color = false
      let size = false
      let price = false

      this.state.style.forEach(s => {if (w.style === s) style = true})
      this.state.color.forEach(c => {if (w.color === c) color = true})
      this.state.size.forEach(sz => {if (w.size === sz) size = true})
      if (w.price > this.state.price[0] && w.price < this.state.price[1]) price = true

      if (style === true &&
          color === true &&
          size === true &&
          price === true
      )
      filteredWatches.push(w)
    })

    this.setState({displayWatches: filteredWatches}, ()=>console.log("First:", this.state.displayWatches))
  }

  handleStyleChange(e) {
    let x = e.target.value.split(" ")
    this.setState({style: x}, this.handleWatchFiltering)
  }
  handleColorChange(e) {
    let x = e.target.value.split(" ")
    this.setState({color: x}, this.handleWatchFiltering)
  }
  handleSizeChange(e) {
    let x = e.target.value.split(" ")
    this.setState({size: x}, this.handleWatchFiltering)
  }
  handlePriceChange(e) {
    let x = e.target.value.split(" ")
    this.setState({price: x}, this.handleWatchFiltering)
  }

  componentDidMount() {this.handleWatchFiltering()}



  render() {


    return (
      <div className='container'>
        <FilterForm>
          <div>
            <H2>Style:</H2>
            <select name="style" onChange={this.handleStyleChange}>
              <option value={['casual', 'business']}>All</option>
              <option value={["casual"]}>Casual</option>
              <option value={["business"]}>Business</option>
            </select>
          </div>
          <div>
            <H2>Color:</H2>
            <select name="color" onChange={this.handleColorChange}>
              <option value={['black gold white']}>All</option>
              <option value={['black']}>Black</option>
              <option value={['gold']}>Gold</option>
              <option value={'white'}>White</option>
            </select>
          </div>
          <div>
            <H2>Size:</H2>
            <select name="size" onChange={this.handleSizeChange}>
              <option value={['small medium large']}>All</option>
              <option value={['small']}>Small</option>
              <option value={['medium']}>Medium</option>
              <option value={['large']}>Large</option>
            </select>
          </div>
          <div>
            <H2>Price:</H2>
            <select name="" onChange={this.handlePriceChange}>
              <option value={['1 1000']}>All</option>
              <option value={['100 200']}>$100-$200</option>
              <option value={['200 300']}>$200-$300</option>
              <option value={['300 400']}>$300-$400</option>
            </select>
          </div>
        </FilterForm>

        <WatchDisplay watches = {this.state.displayWatches}/>

      </div>
    );
  }
}

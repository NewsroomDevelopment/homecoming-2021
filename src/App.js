import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, Theme } from './utils/Styles'
import GlobalData from './utils/GlobalData'

import Navbar from './components/Navbar'
import Title from './containers/Title'
import Section from './containers/Section'
import Acknowledgements from './components/Acknowledgements'
import Articles from './containers/Articles'
import SeniorAds from './containers/SeniorAds';
import AdRow from './components/AdRow';

const sectionNames = [
  "Sports",
  "A&E",
  "Acknowledgments"
]

class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.classDaysRef = React.createRef()
    this.seniorProfRef = React.createRef()
    this.seniorColRef = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
    this.navigateTo = this.navigateTo.bind(this)
    this.prevScroll = 0
    this.state = {
      navActive: 0
    };

    this.sections = {
      "Senior Columns": {
        description: "Members of Spectator’s graduating class reflect on what they’ve learned and how they’ve grown from their time at the organization.",
        ref: this.seniorColRef,
        ad: "https://commencement2021.s3.amazonaws.com/TelAviv_ad.png"
      }
    };
  }

  navigateTo(i){
    switch(i) {
      case 0: 
        window.scrollTo({top: this.classDaysRef.current.offsetTop, behavior: 'smooth'})
        break
      case 1:
        window.scrollTo({top: this.seniorProfRef.current.offsetTop, behavior: 'smooth'})
        break
      case 2:
        window.scrollTo({top: this.seniorColRef.current.offsetTop, behavior: 'smooth'})
        break
      default:
        break
    }
  }

  handleScroll(e){
    // const top1 = this.classDaysRef.current.offsetTop
    // const top2 = this.seniorProfRef.current.offsetTop
    const top2 = this.seniorColRef.current.offsetTop
    const currScroll = window.scrollY
    const winHeight = window.innerHeight
    const adjustedScroll = currScroll + 0.4 * winHeight

    // let scrollingUp = this.prevScroll > window.scrollY

    // if(adjustedScroll > top1 && adjustedScroll < top2){
    //   this.setState({navActive: 0})
    // }
    // if(adjustedScroll > top2) { // && adjustedScroll < top3
    //   this.setState({navActive: 1})
    // }
    // if(adjustedScroll > top3){
    //   this.setState({navActive: 2})
    // }

    this.prevScroll = currScroll
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    return (
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <GlobalStyles/>
          <Title sections={sectionNames} navigateTo={this.navigateTo}/>
          {/* <Navbar active={this.state.navActive} sections={Object.keys(this.sections)} navigateTo={this.navigateTo}/> */}
          {
            Object.keys(this.sections).map(section => (
              <Section 
              name={section} 
              blurb={this.sections[section].description} 
              ad={this.sections[section].ad}
              data={GlobalData[section]} 
              _ref={this.sections[section].ref}
            />
            ))
          }
          <AdRow />
          <Articles 
            sections={[
              {
                title: "Sports",
                articles: GlobalData.Sports
              },
              {
                title: "Arts and Entertainment",
                articles: GlobalData["Arts and Entertainment"]
              }
            ]}
          />
          <Acknowledgements/>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;

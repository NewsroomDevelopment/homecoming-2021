import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./utils/Styles";
import GlobalData from "./utils/GlobalData";

import Title from "./containers/Title";
import Section from "./containers/Section";
import Acknowledgements from "./components/Acknowledgements";
import Articles from "./containers/Articles";

const sectionNames = [
  "Homecoming",
  "Sports",
  "A&E",
  "Opinion",
  "Acknowledgments",
];

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.classDaysRef = React.createRef();
    this.seniorProfRef = React.createRef();
    this.seniorColRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.prevScroll = 0;
    this.state = {
      navActive: 0,
    };

    this.sections = {
      Homecoming: {
        description:
          "Dear readers, \n \nMore than ever, this year’s Homecoming truly feels like coming home. Many of us spent last year away from Morningside Heights, creating a Columbia community from the confines of our bedrooms. While not back in full swing, after 18 months we are back to campus, back to the Baker Athletics Complex, and most importantly, back to being a unified community. \n\n At Spectator, we have used our year of remote learning to reevaluate what it means to be a Columbia student and a member of the greater Morningside Heights and West Harlem communities. Despite being back on campus, many students from all class years still struggle with feeling fully ingrained at Columbia. Homecoming weekend serves as a time to come together and to help find your community whether you are a first-year, senior, or even an alum.\n\nWhether you are the biggest Columbia Lions fan out there, or have never stepped foot near a football stadium, we hope this edition shows you that Homecoming is more than just watching the Light Blue play against Penn. It’s about looking back at memories at the University, but also looking forward.\n\n We invite you to take a look back on the stories that have shaped Homecoming this year, prepare for Saturday afternoon’s game, and reflect on the last 250 years of education and community. \n\nSarah Braka, \nEditor in Chief, President\nLizzie Karpen,\nManaging Editor, Vice President",
        ref: this.seniorColRef,
        miniTitle: "PHOTO ESSAY",
        // link: "https://www.columbiaspectator.com/the-eye/2021/04/29/if-youre-reading-this-its-late/",
        // img: "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5AJHA7YTUNEJLOO4XNLCT7NPEE.jpg"

        // articles: GlobalData.Homecoming
        // ad: "https://commencement2021.s3.amazonaws.com/TelAviv_ad.png"
      },
    };
  }
  navigateTo(i) {
    switch (i) {
      case 0:
        window.scrollTo({
          top: this.classDaysRef.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case 1:
        window.scrollTo({
          top: this.seniorProfRef.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scrollTo({
          top: this.seniorColRef.current.offsetTop,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  }

  handleScroll(e) {
    // const top1 = this.classDaysRef.current.offsetTop
    // const top2 = this.seniorProfRef.current.offsetTop
    // const top2 = this.seniorColRef.current.offsetTop
    // const currScroll = window.scrollY
    // const winHeight = window.innerHeight
    // const adjustedScroll = currScroll + 0.4 * winHeight
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
    // this.prevScroll = currScroll
  }

  // componentDidMount(){
  //     window.addEventListener('scroll', this.handleScroll)
  // }

  // componentWillUnmount(){
  //     window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <GlobalStyles />
          <Title sections={sectionNames} navigateTo={this.navigateTo} />
          {/* <Navbar active={this.state.navActive} sections={Object.keys(this.sections)} navigateTo={this.navigateTo}/> */}
          {Object.keys(this.sections).map((section) => (
            <Section
              name={section}
              blurb={this.sections[section].description}
              // ad={this.sections[section].ad}
              data={GlobalData[section]}
              _ref={this.sections[section].ref}
              miniTitle={this.sections[section].miniTitle}
              // link = "https://www.columbiaspectator.com/the-eye/2021/04/29/if-youre-reading-this-its-late/"
              // img = "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5AJHA7YTUNEJLOO4XNLCT7NPEE.jpg"
            />
          ))}
          <Articles
            sections={[
              {
                title: "Sports",
                articles: GlobalData.Sports,
              },
              {
                title: "Arts and Entertainment",
                articles: GlobalData["Arts and Entertainment"],
              },
              {
                title: "Opinion",
                articles: GlobalData.Opinion,
              },
              // {
              //   title: "Photo",
              //   articles: GlobalData.Photo,
              // },
            ]}
          />
          <Acknowledgements />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;

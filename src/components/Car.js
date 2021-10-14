import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArticleBox from '../components/ArticleBox.js'
import GlobalData from '../utils/GlobalData'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };




export default class Car extends React.Component {
    
    render() {
        
        console.log(GlobalData.News)
        var data = GlobalData[this.props.title]
    
        const carouselItems = data.map((el, i) => {
          var newID = el.title;
          var id = newID.replace(/ /g, "-");
          return <ArticleBox key={i} data={el} id={id}/>
        })
        return (
          <Carousel responsive={responsive}>
            {carouselItems}
          </Carousel>
        )
    }
}
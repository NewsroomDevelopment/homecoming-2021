import React from "react";
import styled from "styled-components";
import TitleCard from "./TitleCard.js";
import { MobileAndTablet, Desktop } from "react-responsive-simple";
import ArticleBox from "../components/ArticleBox.js";

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.white};
`;

const HeaderWrapper = styled.div`
  display: none;
  width: 80%;
  @media only screen and (min-width: 992px) {
    display: inline-flex;
    align-self: flex-start;
    top: 0;
    align-items: center;
    color: ${(props) => props.theme.darkgray};
  }
  @media only screen and (min-width: 1200px) {
    width: 80%;
  }
`;

const Header = styled.div`
  max-width: 35vw;
  /* margin-left: 10rem; */
  & > h1 {
    margin-bottom: 1rem;
  }
`;

const HeaderBlurb = styled.div`
  width: 80%;
  @media only screen and (min-width: 1200px) {
    width: 90%;
  }
`;

const HeaderWrapperMobile = styled.div`
  width: 100vw;
  /* height: 8rem; */
  display: block;
  margin: 0rem 0;
`;

const HeaderMobileTitle = styled.div`
  max-width: 100vw;
  text-align: center;
  margin: 0;
  font-size: 2rem;
  padding: 2rem 0;
  background: ${(props) => props.theme.babyBlue};
  color: ${(props) => props.theme.cream};
  & > h1 {
    margin: 0;
  }
`;

const HeaderMobileBlurb = styled.div`
  max-width: 100vw;
  padding: 1rem;
  background: ${(props) => props.theme.cream};
  color: ${(props) => props.theme.darkgray};
  & > h3 {
    font-size: 1rem;
    text-transform: none;
    font-weight: 600;
  }
  white-space: pre-wrap;
`;

const Title = styled.div`
  text-transform: capitalize;
  font-size: 3.5em;
  margin-top: 0px;
  text-align: center;
`;

const ArticlesWrapper = styled.div`
  width: 100vw;
  @media only screen and (min-width: 992px) {
    display: inline-block;
    width: 40vw;
    padding: 4rem 0;
    /* background: ${(props) => props.theme.babyBlue}; */
  }
  background: ${(props) => props.theme.cream};
  padding: 0rem 0;
`;
const MobilePhotoEssay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Section extends React.Component {
  render() {
    var list = [];
    const Articles = this.props.data.map((el, i) => {
      var newID = el.title;
      var id = newID.replace(/ /g, "-");
      console.log(id);
      list[i] = {
        name: el.title,
        description: el.author,
      };
      return <ArticleBox key={i} data={el} id={id} />;
    });
    const info = [
      {
        title: this.props.name,
        titleDesc: this.props.blurb,
        list: list,
        ad: this.props.ad,
        miniTitle: this.props.miniTitle,
      },
    ];
    const TitleCards = info.map((info) => <TitleCard info={info} />);
    return (
      <SectionWrapper id={this.props.name} ref={this.props._ref}>
        <HeaderWrapper>{TitleCards}</HeaderWrapper>
        <ArticlesWrapper>
          <MobileAndTablet>
            <HeaderWrapperMobile>
              {" "}
              <HeaderMobileTitle>
                <h1 style={{ fontSize: "1.5em" }}>{this.props.name}</h1>
              </HeaderMobileTitle>
              <HeaderMobileBlurb>
                <h3>{this.props.blurb}</h3>
              </HeaderMobileBlurb>
            </HeaderWrapperMobile>
            <Title>
              <h2
                style={{
                  color: "#a0c2df ",
                  fontSize: "30px",
                  marginTop: "0px",
                }}
              >
                Photo Essay (Coming Soon)
              </h2>
            </Title>
            <MobilePhotoEssay>
              {/* <a href="https://www.columbiaspectator.com/the-eye/2021/04/29/if-youre-reading-this-its-late/">
                <img
                  width="350"
                  alt="essay"
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5AJHA7YTUNEJLOO4XNLCT7NPEE.jpg"
                ></img>
              </a> */}
            </MobilePhotoEssay>
          </MobileAndTablet>
          {Articles}
        </ArticlesWrapper>
      </SectionWrapper>
    );
  }
}

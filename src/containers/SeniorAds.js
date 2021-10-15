import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  background-color: #fcfbf7;
  padding: 1rem 2rem;
  margin: 0;
  color: #707070;

  .container {
    position: relative;
    width: 50%;
  }

  .image {
    opacity: 1;
    display: block;
    width: 100%;
    /* height: 20rem; */
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    width: 85%;
  }

  .container:hover .image {
    opacity: 0.3;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
    font-size: 16px;
    padding: 16px 32px;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-family: brandon-grotesque;
  }

  .title {
    font-size: 1.1rem;
    font-weight: bold;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .description {
  }

  .longDescription {
    font-style: italic;
  }

  @media only screen and (max-width: 500px) {
    padding: 1rem 2rem;

    .container {
      width: 100%;
    }

    .title {
      font-size: 0.85rem;
    }

    .description {
      font-size: 0.75rem;
    }

    .longDescription {
      font-size: 0.75rem;
    }
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 3.5em;
  font-weight: bold;
`;

const AdsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 4rem;

  @media only screen and (max-width: 500px) {
    padding: 3rem 1rem;
  }
`;

export default class SeniorAds extends React.Component {
  render() {
    return (
      <Wrap id="Senior Ads">
        <Title>Senior Ads</Title>
        <AdsWrap>
          {this.props.ads.map((ad) => (
            <div class="container">
              <img src={ad.img} alt="Avatar" class="image" />
              <div class="middle">
                <div class="text">
                  <div class="title">{ad.title}</div>
                  <div class="description">{ad.description}</div>
                  <div class="longDescription">{ad.longDescription}</div>
                </div>
              </div>
            </div>
          ))}
        </AdsWrap>
      </Wrap>
    );
  }
}

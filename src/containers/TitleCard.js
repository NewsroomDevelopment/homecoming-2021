import React from "react";
import styled from "styled-components";
import List from "./List.js";

const BigPapa = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  margin-left: 2rem;
  margin-top: 2%;
  white-space: pre-wrap;
`;
const Title = styled.div`
  text-transform: capitalize;
  font-size: 3.5em;
  font-family: brandon-grotesque;
`;

const Desc = styled.div`
  font-size: 1.3em;
  width: 50vw;
`;

const Ad = styled.img`
  width: 100%;
  /* background-color: blue; */
`;

export default class Objects extends React.Component {
  render() {
    return (
      <BigPapa>
        <Title>
          <h1 style={{ color: "#a0c2df ", fontSize: "7vw" }}>
            {this.props.info.title}
          </h1>
        </Title>
        <br />
        <Desc>
          <h3 style={{ fontSize: "17px" }}>{this.props.info.titleDesc}</h3>
        </Desc>
        <br />
        <Title>
          <h2 style={{ color: "#a0c2df ", fontSize: "30px" }}>
            {this.props.info.miniTitle} (To Come)
          </h2>
        </Title>
        <br />

        {/* <a href="https://www.columbiaspectator.com/the-eye/2021/04/29/if-youre-reading-this-its-late/">
                    <img width = "500" alt="essay" src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5AJHA7YTUNEJLOO4XNLCT7NPEE.jpg"></img>
                </a> */}
        {/* <Title style={{'text-align': 'center', marginTop: '1%'}}>To Come</Title> */}

        <Ad src={this.props.info.ad}></Ad>
      </BigPapa>
    );
  }
}

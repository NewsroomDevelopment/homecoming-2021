import React from "react";
import styled from "styled-components";
import Credits from "../utils/Credits";
import { MobileAndTablet, Desktop } from "react-responsive-simple";

const Wrapper = styled.div`
  background: ${(props) => props.theme.babyBlue};
  font-family: brandon-grotesque;
  padding: 4rem 2rem;
  height: auto;
  @media only screen and (min-width: 1200px) {
    height: 100%;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 1.6em;
  color: #ffffff;
  font-weight: 900;
  margin-bottom: 2rem;
  @media only screen and (min-width: 1200px) {
    font-size: 2.8em;
  }
`;

const Panel = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1200px) {
    width: 23%;
  }
`;

const PanelContainer = styled.div`
  display: flex;
  width: 90%;
  padding-left: 2rem;
  justify-content: space-between;
`;

const Section = styled.div`
  font-size: 1.13rem;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Name = styled.div`
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: bold;
  font-style: italic;
  white-space: pre;
  font-family: filson-pro;
  ::after {
    content: ", ";
    font-style: normal;
  }
`;

const Position = styled.div`
  font-size: 0.8rem;
  color: #ffffff;
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
`;

const Person = styled.div`
  display: flex;
  flex-direction: row;
`;

const SectionContainer = styled.div`
  margin-bottom: 1em;
`;

const DevWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  padding-left: 2rem;
`;

const Dev = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 10rem;
`;

class Division extends React.Component {
  render() {
    var creditsList = [];
    var section = this.props.section;
    if (section != undefined) {
      creditsList = Credits[section].map((el, i) => (
        <Person>
          <Name>{el.name}</Name>
          <Position>{el.title}</Position>
        </Person>
      ));
      return (
        <SectionContainer>
          <Section>{section}</Section>
          {creditsList}
        </SectionContainer>
      );
    } else {
      return null;
    }
  }
}

const dev_creds = [
  {
    name: "Kevin Li",
    title: "Former Head of Product",
  },
  {
    name: "Cecilia Orduña",
    title: "Designer",
  },
  {
    name: "Shannon Hui",
    title: "Designer",
  },
  {
    name: "Cindy Espinosa",
    title: "Designer",
  },
  {
    name: "Mirah Shi",
    title: "Designer",
  },
  {
    name: "Arsalaan Ansari",
    title: "Former Head of Engineering",
  },
  {
    name: "Rounak Bera",
    title: "Developer",
  },
  {
    name: "William Chiu",
    title: "Former Head of Product",
  },
  {
    name: "Matthew Vanegas",
    title: "Developer",
  },
  {
    name: "Caroline Hoang",
    title: "Developer",
  },
  {
    name: "Chenoa Bunts-Anderson",
    title: "Developer",
  },
  {
    name: "Chudi Obiofuma",
    title: "Developer",
  },
];

export default class Acknowledgements extends React.Component {
  render() {
    var panel1 = ["Corporate Board", "A&E", "Opinion", "Revenue"];
    var panel2 = ["Sports", "Engineering", "Product Design", "Photo"];
    var panel3 = [
      "Newsroom Development",
      "The Eye",
      "Illustrations",
      "Engagement",
    ];
    var panel4 = ["Copy"];

    return (
      <Wrapper id="Acknowledgments">
        <Title>Acknowledgments</Title>
        <Desktop>
          <PanelContainer>
            <Panel>
              {panel1.map((element, i) => (
                <Division key={i} section={element} />
              ))}
            </Panel>
            <Panel>
              {panel2.map((element, i) => (
                <Division key={i + 100} section={element} />
              ))}
            </Panel>
            <Panel>
              {panel3.map((element, i) => (
                <Division key={i + 200} section={element} />
              ))}
            </Panel>
            <Panel>
              {panel4.map((element, i) => (
                <Division key={i + 300} section={element} />
              ))}
            </Panel>
          </PanelContainer>
        </Desktop>
        <MobileAndTablet>
          <PanelContainer>
            <Panel>
              {panel1
                .concat(panel2)
                .concat(panel3)
                .concat(panel4)
                .map((element, x) => (
                  <Division section={element} />
                ))}
            </Panel>
          </PanelContainer>
        </MobileAndTablet>
        <Title>Design and Development</Title>
        <DevWrap>
          <div>
            {dev_creds.slice(0, 4).map((cred) => {
              return (
                <Dev>
                  <Name>{cred.name}</Name> <Position>{cred.title}</Position>
                </Dev>
              );
            })}
          </div>
          <div>
            {dev_creds.slice(4, 8).map((cred) => {
              return (
                <Dev>
                  <Name>{cred.name}</Name> <Position>{cred.title}</Position>
                </Dev>
              );
            })}
          </div>
          <div>
            {dev_creds.slice(8, 12).map((cred) => {
              return (
                <Dev>
                  <Name>{cred.name}</Name> <Position>{cred.title}</Position>
                </Dev>
              );
            })}
          </div>
        </DevWrap>
      </Wrapper>
    );
  }
}

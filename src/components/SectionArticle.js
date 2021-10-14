import React, { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  margin: 1rem;
  height: 50vh;
  position: relative;
  display: flex;
  background-size: cover;
  align-items: center;
  background-position: center;
  text-decoration:none;
  z-index: 1;
  background-image: url(${(props) => props.img});
  ::before {
    content: "";
    background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    transition: opacity 0.25s linear;
    left: 0px;
    opacity: 0;
    z-index: -1;
  }
  :hover {
    ::before {
      opacity: 1;
    }
    text-decoration:none;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const SectionArticle = ({ article }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <Wrap onMouseEnter={onHover} onMouseLeave={onLeave} img={article.img}>
      <Link style={{"text-decoration":"none"}} href={article.link}>
        {hover && (
          <>
            <Info>
              <Title>{article.title}</Title>
            </Info>
            )
          </>
        )}
      </Link>
    </Wrap>
  );
};

export default SectionArticle;

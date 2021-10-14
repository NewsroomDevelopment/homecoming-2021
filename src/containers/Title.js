import React from 'react';
import styled from 'styled-components'
import ImgSrc from '../images/background.png';

const TitleWrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    /*display: flex;*/
    justify-content: space-between;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
`;

const TitleButton = styled.a`
    
    color: ${props => props.theme.white};
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    &>h2{
        margin: 0;
        font-size: 2rem;
    }
    &>div{
        border-bottom: 4px solid ${props => props.theme.white};
        width: 0;
        transition: width 0.2s;
        
    }
    &:hover>div{
        width: 100%;
    }
    @media only screen and (max-width: 992px){
        &>div{
            display: none;
        }
    }

    :hover {
        text-decoration: none;
    }
`

const SectionContainer=styled.div`
    box-sizing: border-box;
    border-top: 5px solid white;
    height: 100%;
    left: 0;
    padding: 0 3rem;
    margin-top: 10rem;
    /*padding-top: 10rem;*/
    width: 30%;
    
    @media only screen and (max-width: 500px){
        position: absolute;
        height: 30rem;
        width: 100%;
        top: 30%;
        left: 0;
    }
`;

const CommencementHeader=styled.div`
    color:white;
    text-transform: uppercase;
    margin-top: 5rem;
    margin-right: 1rem;
    position: absolute;
    top: 8px;
    right: 16px;
    font-family: brandon-grotesque;
    &>h1 {
        font-size: 5rem;
    }
    @media only screen and (max-width: 1024px){
        word-wrap: break-word;
        color:white;

        &>h1 {
            font-size: 2.5rem;
        }
    }

    @media only screen and (max-width: 500px){
        margin: 3rem 3rem;
        text-align: center;
    }
`

const Logo = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 25rem;

    @media only screen and (max-width: 500px){
        margin: 1rem;
        top: inherit;
        right: inherit;
    }
`

export default class Title extends React.Component {
    
    render(){
        //onClick={()=>{this.props.navigateTo(i)}} 
        const SectionButtons = this.props.sections.map((el, i)=>(
            <TitleButton href={`/#${el === "A&E" ? "Arts and Entertainment" : el}`} key={i}><h2>{el}</h2><div/></TitleButton> 
        ))
        return(
            <TitleWrapper img={ImgSrc}>
                <CommencementHeader><h1>Homecoming 2021</h1></CommencementHeader>
                <SectionContainer>
                    {SectionButtons}
                </SectionContainer>
                
                <a href="https://www.columbiaspectator.com/">
                    <Logo src="https://s3.amazonaws.com/year-in-review-assets/whitemasthead.png" />
                </a>
                {/* <Logo href="https://www.columbiaspectator.com/"/> */}
                
            </TitleWrapper>
        )
    }
}
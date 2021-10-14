import React from 'react';
import styled from 'styled-components'
import {Desktop, MobileAndTablet} from 'react-responsive-simple'


const NavbarWrapper = styled.div`
    display: flex;
    position: sticky;
    left: 0;
    top: 0vh;
    z-index: 5;
    height:3.2rem;
    background-color: ${props => props.theme.grey};
    @media only screen and (min-width: 992px){
        font-size: 30px !important;
        flex-direction: column;
        position: sticky;
        width:10vw;
        height:100vh;
        margin-bottom: -100vh
        background-color: transparent;
    }
`

const ItemContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 1.3rem;
    margin-left: 1rem;
    height:1.2rem;
    width: 82vw;
    border-bottom: solid grey 1px;
    @media only screen and (min-width: 992px){
        flex-direction: column;
        height: 60vh;
        margin-top: 15vh;
        transform: rotate(180deg);
        padding-right: 3vw;
        width: 2vw;
        left: 0;
        margin-left: 0rem;
        border-bottom: none;  
        border-left: solid grey 1px;    
    }
`

const NavItem = styled.div`
    border-bottom: 2px solid ${props => props.active ? props.theme.lightGray : "transparent"};
    color:grey;
    cursor: pointer;
    @media only screen and (min-width: 992px){
        writing-mode: vertical-rl;
        padding-left: 1vw;
        border-bottom: none;
        border-left: 3px solid ${props => props.active ? props.theme.lightGray : "transparent"};
    }
`

const CrownLogo =styled.a`
    position: relative;
    background-image: url("https://s3.amazonaws.com/year-in-review-assets/spectator-logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 10vw;
    top: .5rem;
    left: 2vw;
    @media only screen and (min-width: 992px){
        height: 4vw;
        width: 4vw;
        top: 10vh;
        left: 3.1vw;
    }
`

export default class Navbar extends React.Component {
    render(){
        const NavItems = this.props.sections.map((el, i)=>(
            <NavItem key={i} active={this.props.active === i} onClick={()=>{this.props.navigateTo(i)}}>
                <h3>{el}</h3>
            </NavItem>
        ))
        // Because css only supports writing downwards and we want to write upwards, we
        // are rotating the whole thing by 180deg and reversing the items
        return (
            <NavbarWrapper>
                <CrownLogo href= "https://www.columbiaspectator.com/"/>
                <Desktop>
                    <ItemContainer>
                        {[...NavItems].reverse()}
                    </ItemContainer>
                </Desktop>
                <MobileAndTablet>
                    <ItemContainer>
                        {NavItems}
                    </ItemContainer>
                </MobileAndTablet>
            </NavbarWrapper>
        )
    }
}
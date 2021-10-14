import React from 'react';
import styled from 'styled-components'
import TitleCard from './TitleCard.js';
import {MobileAndTablet, Desktop} from 'react-responsive-simple'
import ArticleBox from '../components/ArticleBox.js'

const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.cream};
`

const HeaderWrapper = styled.div`
    display: none;
    width: 80%;
    @media only screen and (min-width: 992px) {
        display: inline-flex;
        position: sticky;
        align-self: flex-start;
        top: 0;
        height: 130vh;
        align-items: center;
        color: ${props => props.theme.darkgray};
    }
    @media only screen and (min-width: 1200px){
        width: 80%;
    }
`

const Header = styled.div`
    max-width: 35vw;
    /* margin-left: 10rem; */
    &>h1 {
        margin-bottom: 1rem;
    }
`

const HeaderBlurb = styled.div`
    width: 80%;
    @media only screen and (min-width: 1200px){
        width: 90%;
    }
`

const HeaderWrapperMobile = styled.div`
    width: 100vw;
    /* height: 8rem; */
    display: block;  
    margin: 2rem 0;
`

const HeaderMobileTitle = styled.div`
    max-width: 100vw;
    text-align: center;
    margin: 0;
    padding: 2rem 0;
    background: ${props => props.theme.babyBlue};
    color: ${props => props.theme.cream};
    &>h1{
        margin: 0;
    }
`

const HeaderMobileBlurb = styled.div`
    max-width: 100vw;
    text-align: center;
    padding: 1rem;
    background: ${props => props.theme.cream};
    color: ${props => props.theme.darkgray};
    &>h3{
        font-size: 1.5rem;
        text-transform: none;
        font-weight: 600;
    }
`

const ArticlesWrapper = styled.div`
    width: 100vw;
    @media only screen and (min-width: 992px){
        display: inline-block;
        width: 35vw;
        padding: 4rem 0;
        /* background: ${props => props.theme.babyBlue}; */
    }
    background: ${props => props.theme.cream};
    padding: 2rem 0;
`

export default class Section extends React.Component {
    render(){
        var list = [];
        const Articles = this.props.data.map((el, i) => {
            var newID = el.title;
            var id = newID.replace(/ /g, "-");
            console.log(id);
            list[i] = {
                name: el.title,
                description: el.author
            }
            return <ArticleBox key={i} data={el} id={id}/>
        })
        const info = [
            {title: this.props.name,
            titleDesc: this.props.blurb,
            list: list,
            ad: this.props.ad,
            miniTitle: this.props.miniTitle
            
            }
        ]
        const TitleCards = info.map(info => <TitleCard info = {info}/>)
        return(
                <SectionWrapper id={this.props.name} ref={this.props._ref}>
                    <HeaderWrapper>
                        {TitleCards}
                    </HeaderWrapper>
                    <ArticlesWrapper>
                        <MobileAndTablet>
                            <HeaderWrapperMobile>
                                <HeaderMobileTitle>
                                    <h1>{this.props.name}</h1>
                                </HeaderMobileTitle>
                                <HeaderMobileBlurb>
                                    {/* <h3>{this.props.name}</h3> */}
                                    <h1>{this.props.blurb}</h1>
                                </HeaderMobileBlurb>
                            </HeaderWrapperMobile>
                        </MobileAndTablet>
                        {Articles}
                    </ArticlesWrapper>
                </SectionWrapper>
        )
    }
}
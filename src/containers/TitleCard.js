import React from 'react';
import styled from 'styled-components';
import List from './List.js';

const BigPapa = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40vw;
    margin-left: 2rem;
    margin-top: 7rem;
`
const Title = styled.div`
    text-transform: capitalize;
    font-size: 3.5em;

`

const Categories = styled.div`
    display: grid;
    font-size: 1em;
    grid-template-columns: 1fr 1fr 1fr;
`

const Button = styled.a`
    background-color: ${props => props.theme.lightgray};
    border-radius: 25px;
    text-transform: capitalize;
    color: ${props => props.theme.cream};
    display: flex; 
    align-content: center;
    justify-content: center; 
    width: 8em;
    overflow: hidden;
    padding: 1em;
    text-decoration: none;
    :hover{color: ${props => props.theme.darkgray}; text-decoration: none;};
`

const Desc = styled.div`
    font-size: 1.3em;
    width: 36em;
`

const Ad = styled.img`
    width: 100%;
    /* background-color: blue; */
`;


export default class Objects extends React.Component {
	render() {
        const table = this.props.info.list;
        var lists;
        if(table){
            lists = table.map(table => <List list = {table}/>);
        }
        else lists = "";
		return (
			<BigPapa>
                <Title><h1 style={{color:"#a0c2df ",fontSize:"100px"}}>{this.props.info.title}</h1></Title>
                <br/>
                <Desc><h3 style={{fontSize:"20px"}}>{this.props.info.titleDesc}</h3></Desc>
                <br/>
                <Title><h2 style={{color:"#a0c2df ",fontSize:"50px"}}>{this.props.info.miniTitle}</h2></Title>
                <br/>
                
                <a href="https://www.columbiaspectator.com/the-eye/2021/04/29/if-youre-reading-this-its-late/">
                    <img width = "500" alt="essay" src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5AJHA7YTUNEJLOO4XNLCT7NPEE.jpg"></img>
                </a>
                <Ad src={this.props.info.ad}></Ad>
            </BigPapa>	
		)
	}
}
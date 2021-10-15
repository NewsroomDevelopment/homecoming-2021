import React from 'react';
import styled from 'styled-components';
import Car from '../components/Car'

const Wrap = styled.div`
    background-color: #69B3E799;
    padding: 1.5rem 1.5rem;
    margin: 0;
    color: #707070;
`;

const Title = styled.div`
    text-transform: uppercase;
    font-size: 3.5em;
    font-weight: bold;
    padding-bottom: 0.5em;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;


const Section = styled.div`
    margin: 5rem 0;
`;



export default class Articles extends React.Component {
    render() {
        return (
            <Wrap>
                {
                    this.props.sections.map(section => (
                        <Section id={section.title}>
                            <Title>{section.title}</Title>
                            <Car title={section.title}/>
                        </Section>
                    ))
                }
            </Wrap>
        )
    }
}
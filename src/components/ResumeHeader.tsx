import * as React from "react";
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ContactLinks } from "./ContactLinks";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


const SubheadingContainer = styled.h2`
  display: block;
  font-weight: 100;
  color: var(--secondary-color);
  font-size: 1em;
  margin-bottom: 25px;

  @media print {
    color: #505050
  }
`

const FullNameContainer = styled.div`
  width: auto;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 3.5em;
  margin-bottom: 0;
  text-shadow: var(--drop-shadow);

  @media print {
    font-size: 2.25em;
    text-shadow: unset;
  }
`

export const contactInfoIconStyle = {
    color: 'var(--primary-color)',
    marginTop: '5px'
}

export function ResumeHeader({ data }) {
    if (!data) {
        return (
            <div style={{marginBottom: '1.5em'}}>
                <Skeleton width={'75%'} height={'3.5em'} />
                {/* <FullName /> */}
                {/* <ContactLinks /> */}
                {/* <Subheading /> */}
            </div>
        );
    }
    const basics = data.basics;
    const [firstName, lastName] = basics.name.split(' ')
    const subheadings = [basics.label, basics.locationAsString]
    return (
        <div>
            <Container>
                <FullName firstName={firstName} lastName={lastName} />
                <ContactLinks data={data} />
            </Container>
            <Subheading subheading={subheadings}></Subheading>
        </div>
    );
    
}

function Subheading({ subheading }) {
    if (!subheading) {
        return (
            <Skeleton wrapper={SubheadingContainer} />
        )
    }
    return (
        <SubheadingContainer>{subheading[0]} ● {subheading[1]}</SubheadingContainer>
    )

}

function FullName({ firstName, lastName }) {
    if (!(firstName && lastName)) {
        return (
            <Skeleton wrapper={FullNameContainer} />
        )
    }
    return (
        <FullNameContainer className="fullname-header">{firstName} <span style={{ fontWeight: 'bold' }}>{lastName}</span></FullNameContainer>
    )
}


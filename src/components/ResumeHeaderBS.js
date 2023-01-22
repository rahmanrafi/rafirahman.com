import * as React from "react";
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { PrettyLink } from "./common/PrettyLink"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderLinksContainer = styled.div`
  display: inline-block;
  position: relative;
  columns: 2;
`

const SubheadingContainer = styled.h2`
  display: block;
  font-weight: 100; 
  font-size: 1.25rem;
`

const FullNameContainer = styled.h1`
  display: inline;
  width: auto;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 4em;
  margin-bottom: 1rem;
  text-shadow: var(--drop-shadow);
`

const contactInfoIconStyle = {
  color: 'var(--primary-color)',

}

export function ResumeHeader({ data }) {
  if (data?.basics) {
    const basics = data.basics;
    const [firstName, lastName] = basics.name.split(' ')
    const subheadings = [basics.label, basics.locationAsString]
    return (
      <Container>
        <Row className='header'>
          <Col xs={7}><FullName firstName={firstName} lastName={lastName} /></Col>
          <Col xs={5}><HeaderLinks data={data} /></Col>
        </Row>
        <Subheading subheading={subheadings} />
      </Container>
    );
  } else {
    return (
      <div>
        <FullName />
        <HeaderLinks />
        <Subheading />
      </div>
    );
  }
}

function HeaderLinks({ data }) {
  if (!data?.basics) {
    return (
      <Skeleton width={'25%'} height={'40px'} />
    )
  }
  library.add(fab, faGlobe)
  const basics = data.basics;
  return (
    <Row as='ul' className='collection float-right mt-1'>
      {basics.profiles.map(link => {
        const iconClass = 'fab'
        const iconName = link.network.toLowerCase()
        var iconConfig = [iconClass, iconName]
        if (!icon({ prefix: iconClass, iconName: iconName })) {
          iconConfig = 'globe'
        }
        return (
          <Col as='li' className='info-link'>
            <FontAwesomeIcon icon={iconConfig} style={contactInfoIconStyle} />
            <PrettyLink url={link.url} text={link.username} />
            {/* <a href={link.url}>{link.username}</a> */}
          </Col>
        )
      })}
    </Row>
    // <HeaderLinksContainer>
    //   <ul id='contact-info' className='collection'>
    //     {basics.profiles.map(link => {
    //       const iconClass = 'fab'
    //       const iconName = link.network.toLowerCase()
    //       var iconConfig = [iconClass, iconName]
    //       if (!icon({ prefix: iconClass, iconName: iconName })) {
    //         iconConfig = 'globe'
    //       }
    //       return (
    //         <li className='info-link'>
    //           <FontAwesomeIcon icon={iconConfig} style={contactInfoIconStyle} />
    //           <PrettyLink url={link.url} text={link.username} />
    //           {/* <a href={link.url}>{link.username}</a> */}
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </HeaderLinksContainer>
  );
}

function Subheading({ subheading }) {
  if (!subheading) {
    return (
      <SubheadingContainer><Skeleton width={'25%'} /></SubheadingContainer>
    )
  }
  return (
    <SubheadingContainer>{subheading[0]} ● {subheading[1]}</SubheadingContainer>
  )

}

function FullName({ firstName, lastName }) {
  if (!(firstName && lastName)) {
    return (
      <FullNameContainer><Skeleton width={'30%'} /></FullNameContainer>
    )
  }
  return (
    <FullNameContainer>{firstName} <span style={{ fontWeight: 'bold' }}>{lastName}</span></FullNameContainer>
  )
}


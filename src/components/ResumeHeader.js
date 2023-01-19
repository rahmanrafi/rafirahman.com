import * as React from "react";
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from "./common/ExternalLink";

const Container = styled.header`
  display: inline;
`
export function ResumeHeader({ data }) {
  if (data?.basics) {
    const basics = data.basics;
    const [firstName, lastName] = basics.name.split(' ')
    const subheadings = [basics.label, basics.locationAsString]
    return (
      <Container>
        <FullName firstName={firstName} lastName={lastName}></FullName>
        <ContactInfo data={data}></ContactInfo>
        <Subheading subheading={subheadings}> </Subheading>
      </Container>
    );
  } else {
    return (
      <div>
        <FullName></FullName>
        <ContactInfo></ContactInfo>
        <Subheading></Subheading>
      </div>
    );
  }
}

const ContactInfoContainer = styled.div`
  display: inline-flex;
  position: relative;
  columns: 2;
  float: right;
`
function ContactInfo({ data }) {
  if (!data?.basics) { 
    return (
      <Skeleton width={'25%'} height={'40px'} />
    )
  }
  library.add(fab, faGlobe)
  const basics = data.basics;
  return (
    <ContactInfoContainer>
      <ul id='contact-info' className='collection'>
        {basics.profiles.map(function (link) {
          const iconClass = 'fab'
          const iconName = link.network.toLowerCase()
          var iconConfig = [iconClass, iconName]
          if (!icon({ prefix: iconClass, iconName: iconName })) {
            iconConfig = 'globe'
          }
          return (
            <li className='info-link'>
              <FontAwesomeIcon icon={iconConfig} />
              <ExternalLink url={link.url} text={link.username}></ExternalLink>
              {/* <a href={link.url}>{link.username}</a> */}
            </li>
          )
        })}
      </ul>
    </ContactInfoContainer>
  );
}


const SubheadingContainer = styled.h2`
  display: block;
  font-weight: 100;
  font-size: 1.25rem;
`
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

const FullNameContainer = styled.h1`
  display: inline;
  width: auto;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 4em;
  margin-bottom: 1rem;
  text-shadow: var(--drop-shadow);
`
function FullName({ firstName, lastName }) {
  if (!(firstName && lastName)) {
    return (
      <FullNameContainer><Skeleton width={'30%'} /></FullNameContainer>
    )
  }
  return (
    <FullNameContainer>{firstName} <span style={{fontWeight: 'bold'}}>{lastName}</span></FullNameContainer>
  )
}


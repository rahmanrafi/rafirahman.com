import * as React from "react";
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { PrettyLink } from "./common/PrettyLink";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContactLinksContainer = styled.div`
  display: inline-block;
  position: relative;
  columns: 2;
  column-gap: 2em;
`

const SubheadingContainer = styled.h2`
  display: block;
  font-weight: 100; 
  font-size: 1.25rem;
`

const FullNameContainer = styled.h1`
  width: auto;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 3.5em;
  margin-bottom: 0;
  text-shadow: var(--drop-shadow);
`

const ContactLinkItem = styled.div`
  display: flex;
`

const contactInfoLinkStyle = {
  // color: 'var(--primary-color)',
  // marginTop: '5%'
}

const contactInfoIconStyle = {
  color: 'var(--primary-color)',
  marginTop: '5px'
}

export function ResumeHeader({ data }) {
  if (data?.basics) {
    const basics = data.basics;
    const [firstName, lastName] = basics.name.split(' ')
    const subheadings = [basics.label, basics.locationAsString]
    return (
      <Container>
        <FullName firstName={firstName} lastName={lastName} />
        <ContactLinks data={data} />
        {/* <Subheading subheading={subheadings} /> */}
      </Container>
    );
  } else {
    return (
      <div>
        <FullName />
        <ContactLinks />
        <Subheading />
      </div>
    );
  }
}

function ContactLinks({ data }) {
  if (!data?.basics) {
    return (
      <Skeleton width={'25%'} height={'40px'} />
    )
  }
  library.add(fab, faGlobe)
  const basics = data.basics;
  return (
    <ContactLinksContainer className='collection'>
        {basics.profiles.map((link, i) => {
          const iconClass = 'fab'
          const iconName = link.network.toLowerCase()
          var iconConfig = [iconClass, iconName]
          if (!icon({ prefix: iconClass, iconName: iconName })) {
            iconConfig = 'globe'
          }
          return (
            <ContactLinkItem key={i}>
              <FontAwesomeIcon icon={iconConfig} style={contactInfoIconStyle} />
              <PrettyLink url={link.url} text={link.username} />
            </ContactLinkItem>
          )
        })}
    </ContactLinksContainer>
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


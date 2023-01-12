import * as React from "react";
import styled from 'styled-components'
import { ContactInfoComponent } from "./ContactInfoComponent";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HeadingContainer = styled.header`
  display: inline;
`

const Fullname = styled.h1`
  display: inline;
  width: auto;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 4em;
  margin-bottom: 1rem;
  text-shadow: var(--drop-shadow);
`

const Subheading = styled.h2`
  display: block;
  font-weight: 100;
  font-size: 1.25rem;
`

export function HeadingComponent({ resumeData }) {
  if (resumeData?.basics) {
    const basics = resumeData.basics;
    const [firstName, lastName] = basics.name.split(' ')
    const subheadings = [basics.label, basics.locationAsString]
    return (
      <HeadingContainer>
        <Fullname>{firstName} <strong>{lastName}</strong></Fullname>
        {ContactInfoComponent({resumeData})}
        <Subheading>{subheadings[0]} ● {subheadings[1]}</Subheading>
      </HeadingContainer>
    );
  } else {
    return (
      <div>
        <Fullname><Skeleton width={'30%'}/></Fullname>
        <Subheading><Skeleton width={'25%'}/></Subheading>
        <Subheading><Skeleton width={'40%'} height={'40px'}/></Subheading>
      </div>
    );
  }
}

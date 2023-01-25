import * as React from "react";
import styled from 'styled-components'
import { SectionHeader } from "./SectionHeader";

const TimelineContainer = styled.div`
  &:first-of-type {
    margin-top: 1em;
  } 
  &:not(:last-of-type) {
    margin-bottom: 2.5em;
  }
`

export const TimelineSubheading = styled.div`
  color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  margin-right: 3px;
`

export function TimelineSection({ sectionName, ready, children }) {
    return (
        <TimelineContainer>
            <SectionHeader title={sectionName} ready={ready}></SectionHeader>
            <div className='section-container'>
                {children}
            </div>
        </TimelineContainer>
    )
}

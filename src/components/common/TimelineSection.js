import * as React from "react";
import styled from 'styled-components'
import { SectionHeader } from "./SectionHeader";
import { Chrono } from 'react-chrono';

const bulletWidth = '15px'
const lineWidth = '2px'
const bulletMarginTop = '6px'
const bulletBorderWidth = '4px'

const TimelineContainer = styled.div`
  &:first-of-type {
    margin-top: 1em;
  } 
  &:not(:last-of-type) {
    margin-bottom: 2.5em;
  }
`

export const EntrySubheading = styled.div`
  color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  margin-right: 3px;
`

const EntriesListContainer = styled.div`
    position: relative;
    margin-left: 10px;
    &:before {
        content: '';
        background: var(--line-color);
        height: calc(100% - 1em);
        position: absolute;
        width: ${lineWidth};
        z-index: -1;
    }
`

export const EntryBulletContainer = styled.div`
    &:before {
        content: ' ';
        background: var(--primary-color);
        position: absolute;
        display: inline-block;
        border: ${bulletBorderWidth} solid white;
        border-radius: 50%;
        aspect-ratio: 1/1;
        width: ${bulletWidth};
        margin-top: ${bulletMarginTop};
        left: calc(0em - (${bulletWidth} / 2 - (${lineWidth} / 2)));
    }
    .sub:before {
        content: ' ';
        background: white;
        position: absolute;
        display: inline-block;
        border: 2px solid var(--line-color);
        width: calc(${bulletWidth} / 2);
        margin-top: calc(${bulletMarginTop} + 2px);
        left: calc(0em - (${bulletWidth} / 2 / 2 - (${lineWidth} / 2)));
    }
`

export const EntryItem = styled.div`
    padding-left: 1.25em;
    &:first-of-type{
        padding-top: 10px;
    }
`


export function TimelineSection({ sectionName, ready, children }) {
    console.log(sectionName)
    console.log(children)
    return (
        <TimelineContainer>
            <SectionHeader title={sectionName} ready={ready}></SectionHeader>
            <div className='section-container' style={{ width: '100%', height: '100%' }}>
                <EntriesList ready={ready} children={children} />
            </div>
        </TimelineContainer>
    )
}

export function EntriesList({ ready, children }) {
    console.log('children')
    console.log(children)
    if (!ready) {
        return (
            <div>
                {children}
            </div>
        )
    }
    return (
        <EntriesListContainer>
            {React.Children.map(children, child => (
                <EntryItem>
                    <EntryBullet data={child} />
                </EntryItem>
            ))}
        </EntriesListContainer>
    )
}

export function EntryBullet({ data, sub = false }) {
    let secondaryClass = sub ? 'sub' : ''
    return (
        <EntryBulletContainer className={secondaryClass}>
            {data}
        </EntryBulletContainer>
    )
}
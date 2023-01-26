import * as React from "react";
import styled from 'styled-components'
import { SectionHeader } from "./SectionHeader";
import Stack from 'react-bootstrap/Stack'


const bulletWidth = '15px'
const lineWidth = '2px'
const bulletMarginTop = '6px'
const bulletBorderWidth = '4px'

const TimelineContainer = styled.div`
  &:first-of-type {
    margin-top: 1em;
  } 
  &:not(:last-of-type) {
    margin-bottom: 2em;
  }
`

export const ListBullet = styled.li`
    &::marker {
        color: var(--primary-color);
        font-size: 0.7em;
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
        margin-top: calc(${bulletMarginTop});
        left: calc(0em - (${bulletWidth} / 2 - (${lineWidth} / 2)));
    }
    &.sub:before {
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

const BulletTime = styled.div`
    color: var(--secondary-color);
    font-size: 0.9em;
    position: absolute;
    text-align: right;
    left: -6.5em;
    width: 5em;
`


export function TimelineSection({ sectionName, ready, children }) {
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
                    {child}
                </EntryItem>
            ))}
        </EntriesListContainer>
    )
}

export function EntryBullet({ data, sub = false }) {
    console.log(data)
    let secondaryClass = !sub ? 'sub' : ''
    return (
        <div className='eb'>
            <BulletTime>
                <Stack>
                    {data.map(d => <div>{d}</div>)}
                </Stack>
            </BulletTime>
            <EntryBulletContainer className={secondaryClass}>
            </EntryBulletContainer>
        </div>

    )
}

export function DateSubheading({startDate, endDate}) {
    let dateSubheading = (
        <EntrySubheading>
            <div>{startDate} - {endDate}</div>
            {/* <div>({role.duration})</div> */}
        </EntrySubheading>
    )
    // <div style={{position: 'relative', right: '25px', color: 'var(--tertiary-color)'}}>•</div>
    return (
        <EntryBullet data={[startDate, endDate]} sub={true}>{dateSubheading}</EntryBullet>
        // <EntryBullet sub={true}>{dateSubheading}</EntryBullet>
    )
    // return (i ? <EntryBullet sub={true}>{dateSubheading}</EntryBullet> : dateSubheading)
}
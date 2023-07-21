import * as React from "react";
import styled from 'styled-components'
import { SectionHeader } from "./SectionHeader";
import Stack from 'react-bootstrap/Stack'


const bulletWidth = '14.5px'
const lineWidth = '2px'
const bulletMarginTop = '4px'
const bulletBorderWidth = '4px'

const TimelineContainer = styled.div`
  &:first-of-type {
    margin-top: 1em;
  } 
  &:not(:last-of-type) {
    margin-bottom: 2em;
    @media print {
        margin-bottom: 1em;
    }
  }
`

export const ListBullet = styled.li`
    font-size: 0.9em;
    line-height: 1.5em;
    margin-bottom: 10px;
    &::marker {
        color: var(--primary-color);
        font-size: 0.7em;
    }
`

export const EntrySubheading = styled.div`
  color: var(--secondary-color);
  display: flex;
  font-size: 0.9em;
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
    padding-left: 1.5em;
    &:first-of-type{
        padding-top: 10px;
    }
`

let BulletTime = styled.div`
    color: var(--secondary-color);
    font-size: 0.9em;
    position: absolute;
    text-align: right;
    left: -6em;
    width: 5em;
`

let DateStack = styled.div`
    display: flex;
    flex-direction: column;
`

let DateSeparator = styled.div`
    color: var(--tertiary-color);
    position: relative;
    right: 7.5px;
    line-height: 15px;
`

let printOptions: Record<string, any> = {}

export function TimelineSection({ sectionName, data, children, className }: { sectionName: string, data: any, children: JSX.Element[], className?: string}) {
    printOptions = data?.printOptions ?? {}

    return (
        <TimelineContainer className={className}>
            <SectionHeader title={sectionName} data={data}></SectionHeader>
            <div className='section-container' style={{ width: '100%', height: '100%' }}>
                <EntriesList data={data} children={children} />
            </div>
        </TimelineContainer>
    )
}

export function EntriesList({ data, children }) {
    if (!data) {
        return (
            <div>
                {children}
            </div>
        )
    }
    return (
        <EntriesListContainer className="entries-list-container">
            {React.Children.map(children, child => (
                <EntryItem>
                    {child}
                </EntryItem>
            ))}
        </EntriesListContainer>
    )
}

export function EntryBullet({ startDate, endDate, sub = false }: { startDate: string, endDate: string, sub: boolean }) {
    let secondaryClass = !sub ? 'sub' : ''

    if (printOptions.inlineDates) {
        BulletTime = styled.div`
            color: var(--secondary-color);
            font-size: 0.9em;
            position: absolute;
            text-align: right;
            left: -6em;
            width: 5em;

            @media print {
                display: none;
            }
        `
    }
    return (
        <div className='entry-bullet'>
            <BulletTime>
                <DateStack>
                    <div>{startDate}</div>
                    <DateSeparator>|</DateSeparator>
                    <div>{endDate}</div>
                    {/* {dates.map(d => <div>{d}</div>)} */}
                </DateStack>
            </BulletTime>
            <EntryBulletContainer className={secondaryClass} />
        </div>

    )
}

export function DateSubheading({startDate, endDate}) {
    // let dateSubheading = (
    //     <EntrySubheading>
    //         <div>{startDate} - {endDate}</div>
    //         {/* <div>({role.duration})</div> */}
    //     </EntrySubheading>
    // )
    // <div style={{position: 'relative', right: '25px', color: 'var(--tertiary-color)'}}>•</div>
    return (
        <EntryBullet startDate={startDate} endDate={endDate} sub={true}></EntryBullet>
        // <EntryBullet sub={true}>{dateSubheading}</EntryBullet>
    )
    // return (i ? <EntryBullet sub={true}>{dateSubheading}</EntryBullet> : dateSubheading)
}
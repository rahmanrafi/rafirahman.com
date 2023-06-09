import * as React from "react";
import styled from 'styled-components'
import { SectionSkeleton } from "./common/SectionSkeleton";
import { formatTime } from "../../api/timelineUtils";
import { DateSubheading, EntrySubheading, ListBullet } from "./common/TimelineSection";
import { InfoTag } from "./common/InfoTag";
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const InlineDate = styled.div`
    display: none;
    
    @media print {
        display: block;
    }
`

let printOptions: Record<string, any> = {}

export function EducationSection(data) {
    if (!data) {
        return (
            <div>
                <SectionSkeleton />
            </div>
        )
    }

    printOptions = data?.printOptions
    return((data?.education ?? []).map((entry, i) => (
        <EducationEntry entryData={entry} key={i} />
    )))
}

export function EducationEntry({ entryData }) {
    [entryData.start, entryData.startDate] = formatTime(entryData.start);
    [entryData.end, entryData.endDate] = formatTime(entryData.end)
    const awardsList = entryData.awards.map(award => {
        const [_, awardTime] = formatTime(award.fullDate)
        const body = `${award.title}, ${awardTime}`
        return <ListBullet>{body}</ListBullet>
    })
    let inlineDate = <></>
    if (printOptions?.inlineDates) {
        console.log("inline")
        inlineDate = (
            <InlineDate>
                 <InfoTag text={`${entryData.startDate} - ${entryData.endDate}`} icon={faCalendar} title="Date" />
            </InlineDate>
        )
    }
    console.log(awardsList)
    return (
        <div>
            <div className={'subsection-header'}>{entryData.institution}</div>
            <div>
                <DateSubheading startDate={entryData.startDate} endDate={entryData.endDate} />
            </div>
            <div>
                <EntrySubheading>
                    <div className="entry-subheading">{entryData.studyType} | CGPA: {entryData.score}</div>
                    <div style={{ display: "flex", gap: "15px" }}>
                        <InfoTag icon={faLocationDot} text={entryData.location} title="Location" />
                        { inlineDate }
                    </div>
                </EntrySubheading>
                <ul>
                    <ListBullet>Fields of study: {entryData.area}</ListBullet>
                    {awardsList}
                </ul>
            </div>
        </div>
    )
}
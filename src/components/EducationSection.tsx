import * as React from "react";
import { SectionSkeleton } from "./common/SectionSkeleton";
import { formatTime } from "../../api/timelineUtils";
import { DateSubheading, EntrySubheading, ListBullet } from "./common/TimelineSection";
import { LocationTag } from "./common/LocationTag";

export function EducationSection(data) {
    if (!data) {
        return (
            <div>
                <SectionSkeleton />
            </div>
        )
    }
    return(data.map((entry, i) => (
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
                    <LocationTag location={entryData.location} />
                </EntrySubheading>
                <ul>
                    <ListBullet>Fields of study: {entryData.area}</ListBullet>
                    {awardsList}
                </ul>
            </div>
        </div>
    )
}
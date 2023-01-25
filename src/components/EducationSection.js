import * as React from "react";
import { SectionSkeleton } from "./common/SectionSkeleton";
import { formatTime } from "../../api/timelineUtils";
import { TimelineSubheading } from "./common/TimelineSection";

export function EducationSection(data) {
    if (!data) {
        return (
            <div>
                <SectionSkeleton />
            </div>
        )
    }
    let entriesArray = []
    data.map((entry, i) => {
        entriesArray.push(<EducationEntry entry={entry} key={i} />)
    })
    return entriesArray
}

export function EducationEntry({ entry }) {
    [entry.start, entry.startDate] = formatTime(entry.start);
    [entry.end, entry.endDate] = formatTime(entry.end)
    return (
        <div>
            <div className={'subsection-header'}>{entry.institution}</div>
            <div>
                <TimelineSubheading>
                    <div>{entry.studyType}</div>
                    <div>CGPA: {entry.score}</div>
                </TimelineSubheading>
            </div>
            <div>{entry.startDate} - {entry.endDate}</div>
        </div>
    )
}
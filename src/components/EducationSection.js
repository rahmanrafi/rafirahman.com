import * as React from "react";
import { SectionSkeleton } from "./common/SectionSkeleton";
import { formatTime } from "../../api/timelineUtils";
import { EntrySubheading } from "./common/TimelineSection";

export function EducationSection(data) {
    if (!data) {
        return (
            <div>
                <SectionSkeleton />
            </div>
        )
    }
    return(data.map((entry, i) => (
        <EducationEntry entry={entry} key={i} />
    )))
}

export function EducationEntry({ entry }) {
    [entry.start, entry.startDate] = formatTime(entry.start);
    [entry.end, entry.endDate] = formatTime(entry.end)
    return (
        <div>
            <div className={'subsection-header'}>{entry.institution}</div>
            <div>
                <EntrySubheading>
                    <div>{entry.studyType}</div>
                    <div>CGPA: {entry.score}</div>
                </EntrySubheading>
            </div>
            <div>{entry.startDate} - {entry.endDate}</div>
        </div>
    )
}
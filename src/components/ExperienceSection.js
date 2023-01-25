import * as React from "react";
import { chronologizeRoles } from "../../api/timelineUtils";
import { PrettyLink } from "./common/PrettyLink";
import { SectionSkeleton } from "./common/SectionSkeleton";
import { TimelineSubheading } from "./common/TimelineSection";

export function ExperienceSection(data) {
    if (!data) {
        return (
            <div>
                <SectionSkeleton count={3} />
            </div>
        )
    }
    let timelineData = chronologizeRoles(data)
    let entriesArray = []
    timelineData.map((entry, i) => {
        entriesArray.push(<EmployerEntry data={entry} key={i} />)
    })
    return entriesArray
}

export function EmployerEntry({ data }) {
    let employerHeader = <div className='subsection-header'>{data.company}</div>
    if (data.website) {
        employerHeader = <PrettyLink className='subsection-header' url={data.website} text={data.company} isTitle={true} />
    }
    return (
        <div>
            {employerHeader}
            <div>
                {data.roles.map((role, i) => <EmploymentRole role={role} key={i} />
                )}
            </div>
        </div>
    );
}

function EmploymentRole({ role }) {
    return (
        <div>
            <div>
                <TimelineSubheading>
                    <div>{role.startDate} - {role.endDate}</div>
                    <div>({role.duration})</div>
                </TimelineSubheading>
            </div>
            <div>
                <TimelineSubheading>
                    <div>{role.position}</div>
                    <div>{role.location}</div>
                </TimelineSubheading>
            </div>
            <ul>
                {role.highlights.map((detail, i) =>
                    <li key={i}>{detail}</li>
                )}
            </ul>
        </div>
    );
}

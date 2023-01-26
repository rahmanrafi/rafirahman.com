import * as React from "react";
import styled from 'styled-components'
import { chronologizeRoles } from "../../api/timelineUtils";
import { PrettyLink } from "./common/PrettyLink";
import { SectionSkeleton } from "./common/SectionSkeleton";
import { EntrySubheading, EntryBulletContainer, EntryBullet } from "./common/TimelineSection";

const RoleDetails = styled.div`
`

export function ExperienceSection(data) {
    if (!data) {
        return (
            <div>
                <SectionSkeleton count={3} />
            </div>
        )
    }
    return (chronologizeRoles(data).map((entry, i) => (
        <EmployerEntry data={entry} key={i} />
    )))
}

export function EmployerEntry({ data }) {
    let employerHeader = <div className='subsection-header'>{data.company}</div>
    if (data.website) {
        employerHeader = <PrettyLink className='subsection-header' url={data.website} text={data.company} isTitle={true} />
    }
    return (
        <div>
            {employerHeader}
            <RoleDetails>
                {data.roles.map((role, i) => <EmploymentRole role={role} index={i} key={i} />
                )}
            </RoleDetails>
        </div>
    );
}

function EmploymentRole({ role, index }) {
    function genDateSubheading(i) {
        let dateSubheading = (
            <EntrySubheading>
                <div>{role.startDate} - {role.endDate}</div>
                <div>({role.duration})</div>
            </EntrySubheading>
        )
        return i ? <EntryBullet sub={true}>{dateSubheading}</EntryBullet> : dateSubheading
    }

    return (
        <div>
            <div>
                {genDateSubheading(index)}
                {/* <EntrySubheading>
                    <div>{role.startDate} - {role.endDate}</div>
                    <div>({role.duration})</div>
                </EntrySubheading> */}
            </div>
            <div>
                <EntrySubheading>
                    <div>{role.position}</div>
                    <div>{role.location}</div>
                </EntrySubheading>
            </div>
            <ul>
                {role.highlights.map((detail, i) =>
                    <li key={i}>{detail}</li>
                )}
            </ul>
        </div>
    );
}

import * as React from "react";
import styled from 'styled-components'
import { chronologizeRoles } from "../../api/timelineUtils";
import { LocationTag } from "./common/LocationTag";
import { PrettyLink } from "./common/PrettyLink";
import { SectionSkeleton } from "./common/SectionSkeleton";
import { EntrySubheading, EntryBulletContainer, EntryBullet, DateSubheading, ListBullet } from "./common/TimelineSection";

const RoleDetails = styled.div`
    margin-bottom: 20px;
`

const RoleUl = styled.ul`
    margin-bottom: 7.5px;
`



export function ExperienceSection(data) {
    if (!data) {
        return (
            <SectionSkeleton count={3} />
        )
    }
    return (chronologizeRoles(data).map((entry, i) => (
        <EmployerEntry entryData={entry} key={i} />
    )))
}

export function EmployerEntry({ entryData }) {
    const className = "subsection-header"
    const [company, url] = [entryData.company, entryData.website]
    console.log(entryData)
    const employerHeader = url ? <PrettyLink url={url} text={company} isTitle={true} /> : <div className={className}>{company}</div>
    return (
        <div>
            {employerHeader}
            <RoleDetails>
                {entryData.roles.map((role: Record<string, any>, i: number) => <EmploymentRole role={role} index={i} key={i} />
                )}
            </RoleDetails>
        </div>
    );
}

function EmploymentRole({ role, index }: { role: Record<string, any>, index: number }) {
    const roleHighlights = role.highlights.map((detail: Record<string, any>, i: number) => <ListBullet key={i}>{detail}</ListBullet>)
    return (
        <div>
            <DateSubheading startDate={role.startDate} endDate={role.endDate} />
            <EntrySubheading>
                <div className="entry-subheading">{role.position}</div>
                <LocationTag location={role.location} />
            </EntrySubheading>
            <RoleUl>
                {roleHighlights}
            </RoleUl>
        </div>
    );
}

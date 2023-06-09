import * as React from "react";
import styled from 'styled-components'
import { chronologizeRoles } from "../../api/timelineUtils";
import { InfoTag } from "./common/InfoTag";
import { PrettyLink } from "./common/PrettyLink";
import { SectionSkeleton } from "./common/SectionSkeleton";
import { EntrySubheading, EntryBulletContainer, EntryBullet, DateSubheading, ListBullet } from "./common/TimelineSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const RoleDetails = styled.div`
    margin-bottom: 20px;
`

const RoleUl = styled.ul`
    margin-bottom: 7.5px;
`

const InlineDate = styled.div`
    display: none;
    
    @media print {
        display: block;
    }
`

let printOptions: Record<string, any> = {}

export function ExperienceSection(data) {
    if (!data) {
        return (
            <SectionSkeleton count={3} />
        )
    }

    printOptions = data?.printOptions ?? {}
    return (chronologizeRoles(data?.work ?? []).map((entry, i) => (
        <EmployerEntry entryData={entry} key={i} />
    )))
}

export function EmployerEntry({ entryData }) {
    const className = "subsection-header"
    const [company, url] = [entryData.company, entryData.website]
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
    let inlineDate = <></>
    if (printOptions?.inlineDates) {
        console.log("inline")
        inlineDate = (
            <InlineDate>
                 <InfoTag text={`${role.startDate} - ${role.endDate}`} icon={faCalendar} title="Date" />
            </InlineDate>
        )
    }
    return (
        <div>
            <DateSubheading startDate={role.startDate} endDate={role.endDate} />
            <EntrySubheading>
                <div style={{ display: "flex", gap: "15px" }}>
                    <div className="entry-subheading">{role.position}</div>
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                    <InfoTag text={role.location} icon={faLocationDot} title="Location" />
                    { inlineDate }
                </div>
            </EntrySubheading>
            <RoleUl>
                {roleHighlights}
            </RoleUl>
        </div>
    );
}

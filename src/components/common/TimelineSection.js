import * as React from "react";
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { library, icon, IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
// import { LocationTag } from "./LocationTag";
import { SectionHeader } from "./SectionHeader";
import Skeleton from 'react-loading-skeleton'
import { chronologizeEmployment } from "../../../api/chronologizeEmployment";

const TimelineContainer = styled.div`
`

const SectionContainer = styled.div`
`

const SectionTitleLink = styled.a`
  font-size: 1.5em;
`

export function TimelineSection({ sectionName, data }) {
  if (!data) {
    return (
      <Skeleton width={'50%'} inline={true} />
    )
  }
  let iterableEntries = data
  if (sectionName.toLowerCase() == 'experience') {
    iterableEntries = chronologizeEmployment(data)
  }
  return (
    <TimelineContainer>
      <SectionHeader title={sectionName}></SectionHeader>
      <SectionContainer>
        {iterableEntries.map((entry, i) =>
          <TimelineEntry sectionName={sectionName} data={entry} key={i} />
        )}
      </SectionContainer>
    </TimelineContainer>
  )
}

function EmployerEntry({ data }) {
  return (
    <div>
      <a className='section-header' href={data.website}>{data.company}</a>
      <div>
        {data.roles.map((role, i) =>
          <EmploymentRole role={role} key={i}/>
        )}
      </div>
    </div>
  )
}

function EmploymentRole({ role }) {
  return (
    <div>
      <div>{role.position}</div>
      <div>{role.startDate} - {role.endDate}</div>
      <ul>
        {role.highlights.map((detail, i) =>
          <li key={i}>{detail}</li>
        )}
      </ul>
    </div>
  )
}

function TimelineEntry({ sectionName, data }) {
  if (sectionName.toLowerCase() == 'experience') {
    return EmployerEntry({ data })
  }
  console.log(data)
  return (
    <div>
      {Object.values(data).toString()}
      <br></br>
    </div>
  )
}


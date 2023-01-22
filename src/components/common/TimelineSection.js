import * as React from "react";
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { library, icon, IconName} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
// import { LocationTag } from "./LocationTag";
import { SectionHeader } from "./SectionHeader";
import Skeleton from 'react-loading-skeleton'


const TimelineContainer = styled.div`
`

const SectionContainer = styled.div`
`

export function TimelineSection({ sectionName, data }) {
  if (!data) {
    return (
      <Skeleton width={'50%'} inline={true} />
    )
  }
  return (
    <TimelineContainer>
      <SectionHeader title={sectionName}></SectionHeader>
      <SectionContainer>
        { data.map((el) => 
          <TimelineEntry data={el}></TimelineEntry>
        )}
      </SectionContainer>
    </TimelineContainer>
  )
}

function TimelineEntry({ data }) {
  return(
    <div>
      {JSON.stringify(data)}
      <br></br>
    </div>
  )
}
import * as React from "react";
import styled from 'styled-components'
import 'react-loading-skeleton/dist/skeleton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const LocationTagContainer = styled.div`
  display: inline-flex;
  align-items: center;
`
const LocationIconStyle = {
    marginRight: '10px',
    fontSize: '0.66em',
    color: 'var(--secondary-color)',
}

export function LocationTag({ location }) {
    return (
      <LocationTagContainer>
        <FontAwesomeIcon icon={faLocationDot} style={LocationIconStyle} /> {location}
      </LocationTagContainer>
    )
}
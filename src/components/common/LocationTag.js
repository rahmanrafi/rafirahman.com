import * as React from "react";
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { library, icon, IconName} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Location = styled.div`
    display: inline;
`

export function LocationComponent({ location }) {
  if (location) {
    library.add(faLocationDot)
    return (
        <Location>
            <FontAwesomeIcon icon='location-dot'></FontAwesomeIcon> {location}
        </Location>
    );
  } else {
    return (
      <h1> Loading...</h1>
    );
  }
}

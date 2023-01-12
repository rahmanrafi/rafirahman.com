import * as React from "react";
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { library, icon, IconName} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const ContactInfoContainer = styled.div`
  display: inline-flex;
  position: relative;
  columns: 2;
  float: right;
`

export function ContactInfoComponent({ resumeData }) {
  if (resumeData?.basics) {
    library.add(fab, faGlobe)
    const basics = resumeData.basics;
    return (
      <ContactInfoContainer>
        <ul id='contact-info' class='collection'>
            {basics.profiles.map(function (link) {
                const iconClass = 'fab'
                const iconName = link.network.toLowerCase()
                var iconConfig = [iconClass, iconName]
                if(!icon({prefix: iconClass, iconName: iconName})) {
                    iconConfig = 'globe'
                }  
                return (
                    <li class='info-link'>
                        <FontAwesomeIcon icon={iconConfig}/>
                        <a href={link.url}>{link.username}</a>
                    </li>
                )
            })}
        </ul>
      </ContactInfoContainer>
    );
  } else {
    return (
      <h1> Loading...</h1>
    );
  }
}

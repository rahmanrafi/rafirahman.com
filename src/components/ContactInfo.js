import * as React from "react";
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { library, icon, IconName} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from "./common/ExternalLink";

const ContactInfoContainer = styled.div`
  display: inline-flex;
  position: relative;
  columns: 2;
  float: right;
`

const ContactInfoItem = styled.li`
  display: inherit;
`

export function ContactInfo({ data }) {
  if (data?.basics) {
    library.add(fab, faGlobe)
    const basics = data.basics;
    return (
      <ContactInfoContainer>
        <ul id='contact-info' class='collection'>
            {basics.profiles.map((link, index) => {
                const iconClass = 'fab'
                const iconName = link.network.toLowerCase()
                var iconConfig = [iconClass, iconName]
                if(!icon({prefix: iconClass, iconName: iconName})) {
                    iconConfig = 'globe'
                }  
                return (
                    <ContactInfoItem key={`contact-info-${index}`}>
                        <FontAwesomeIcon icon={iconConfig}/>
                        <ExternalLink url={link.url}>{link.username}</ExternalLink>
                    </ContactInfoItem>
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

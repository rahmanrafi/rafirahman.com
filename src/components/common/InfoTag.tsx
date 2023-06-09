import * as React from "react";
import styled from 'styled-components'
import 'react-loading-skeleton/dist/skeleton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const InfoTagContainer = styled.div`
  display: inline-flex;
  align-items: center;
`
const InfoTagStyle = {
    marginRight: '5px',
    color: "#555555",
}

export function InfoTag({ text, icon, title }: { text: string, icon: any, title: string }) {
    return (
      <InfoTagContainer>
        <FontAwesomeIcon icon={icon} style={InfoTagStyle}/> {text}
      </InfoTagContainer>
    )
}
import * as React from "react";
// import styled from 'styled-components'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components'
import Stack from 'react-bootstrap/Stack'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const headerStyle = {
    color: 'var(--secondary-color)'
}

const SectionHeaderContainer = styled.h3 `
    font-size: 1.5em;
    color: var(--secondary-color);
`

const headerIconStyle = {
    fontSize: '0.9em',
    marginRight: '10px'
}

const workIcon = 'briefcase'
const miscIcon = 'pencil-ruler'
const sectionIcons = {
    'skills': miscIcon,
    'education': 'graduation-cap',
    'employment': workIcon,
    'experience': workIcon,
    'work': workIcon
}

export function SectionHeader({ title, icon }) {
    library.add(fas)
    if (!icon) { 
        icon = sectionIcons[title.toLowerCase()] || miscIcon
    }

    return (
        <Stack direction='horizontal'>
            <SectionHeaderContainer>
                <span><FontAwesomeIcon style={headerIconStyle} icon={icon}/></span> {title}
            </SectionHeaderContainer>
        </Stack>
    )
}
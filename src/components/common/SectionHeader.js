import * as React from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components'
import Stack from 'react-bootstrap/Stack'
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const iconWidth = '0.9em'
const workIcon = 'briefcase'
const miscIcon = 'pencil-ruler'

const sectionIcons = {
    'skills': miscIcon,
    'education': 'graduation-cap',
    'employment': workIcon,
    'experience': workIcon,
    'work': workIcon
}

const headerIconStyle = {
    fontSize: iconWidth,
    marginRight: '10px'
}

const SectionHeaderContainer = styled.h3`
    font-size: 1.3em;
    color: var(--secondary-color);
`

export function SectionHeader({ title, icon, ready }) {
    if (!ready) {
        return (
            <SectionHeaderContainer style={{ fontSize: '2.5em' }}>
                <Skeleton width={'55%'} inline={true}></Skeleton>
            </SectionHeaderContainer>
        )
    }
    library.add(fas)
    if (!icon) {
        icon = sectionIcons[title.toLowerCase()] || miscIcon
    }

    return (
        <Stack direction='horizontal'>
            <SectionHeaderContainer>
                <span><FontAwesomeIcon style={headerIconStyle} icon={icon} /></span> {title}
            </SectionHeaderContainer>
        </Stack>
    )
}
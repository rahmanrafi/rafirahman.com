import * as React from "react";
import styled from 'styled-components'
import 'react-loading-skeleton/dist/skeleton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const ExternalIconStyle = {
    height: '0.6em',
    marginLeft: '7px',
    color: 'var(--tertiary-color)',
}

const Link = styled.a`
    display: inline-flex;
    align-items: baseline;
    box-shadow: var(--accent-color) 0 -2px 0 inset;
    color: var(--primary-color);
    text-decoration: none;
    transition: box-shadow 160ms cubic-bezier(0.62, 0.67, 0, 1.24) 0s;
    &:hover {
        color: inherit;
        box-shadow: var(--accent-color) 0 -1.2em 0 inset;
    }

    @media print {
        box-shadow: unset;
    }
`
export function PrettyLink({ url, text = url, isTitle = false, className = "" }: { url: string, text: string, isTitle?: boolean, className?: string}) {
    isTitle ? library.add(faArrowUpRightFromSquare) : null
    const linkClassNames = ["pretty-link"]
    isTitle ? linkClassNames.push("subsection-header") : null
    return (
        <Link href={url} className={linkClassNames.join(" ")}>
            {text} {isTitle ? <FontAwesomeIcon className="link-icon" icon={faArrowUpRightFromSquare} style={ExternalIconStyle} /> : null}
        </Link>
    )
}
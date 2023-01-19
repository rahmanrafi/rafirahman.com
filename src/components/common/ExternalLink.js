import * as React from "react";
import styled from 'styled-components'
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Container = styled.a`
    box-shadow: var(--accent-color) 0 -2px 0 inset;
    color: var(--primary-color);
    text-decoration: none;
    transition: box-shadow 160ms cubic-bezier(0.62, 0.67, 0, 1.24) 0s;
`
export function ExternalLink({ url, text }) {
    text = text ? text : url
    return (
        <Container href={url}>
            {text}
        </Container>
    )
}
import * as React from "react";
import styled from 'styled-components'
import Skeleton from "react-loading-skeleton";

const lineMaxWidth = 85
const lineMinWidth = 35
const SkeletonContainer = styled.div`
    margin-bottom: 20px;
`

export function SectionSkeleton({ count = 1 }: { count?: number }): JSX.Element {
    function randomWidth() {
        return `${Math.random() * (lineMaxWidth - lineMinWidth) + lineMinWidth}%`
    }
    let skeletonArray: JSX.Element[] = []
    for (let i = 0; i < count; i++) {
        // let randWidth = randomWidth()
        let randWidth = '100%'

        skeletonArray.push(
            <SkeletonContainer key={i}>
                <Skeleton width={randWidth} height={'1.75em'} />
                <Skeleton width={randWidth} height={'5em'} />
            </SkeletonContainer>
        )
    }
    return (
        <div>
            {skeletonArray}
        </div>
    )
}
import * as React from "react";
import styled from 'styled-components'
import Skeleton from "react-loading-skeleton";

const lineMaxWidth = 85
const lineMinWidth = 35
const SkeletonContainer = styled.div`
    margin-bottom: 20px;
`

export function SectionSkeleton({ count = 1 }) {
    function randomWidth() {
        return `${Math.random() * (lineMaxWidth - lineMinWidth) + lineMinWidth}%`
    }
    let skeletonArray = []
    for (let i = 0; i < count; i++) {
        skeletonArray.push(
            <SkeletonContainer>
                <Skeleton width={randomWidth()} height={'1.75em'} />
                <Skeleton width={randomWidth()} height={'5em'} />
            </SkeletonContainer>
        )
    }
    return skeletonArray
}
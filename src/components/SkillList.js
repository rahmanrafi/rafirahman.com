import * as React from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge';
import { SectionSkeleton } from "./common/SectionSkeleton";

export function SkillList(data) {
    if (!data) {
        return (
            <SectionSkeleton />
        )
    }
    return (
        <Stack style={{ flexWrap: 'wrap' }} direction='horizontal' gap={1}>
            {data.map((skill, i) => (
                <SkillItem skill={skill} key={i}></SkillItem>
            ))}
        </Stack>
    )

}

function SkillItem({ skill }) {
    return (
        <Badge pill bg='light'>
            {skill.name}
        </Badge>
    )
}
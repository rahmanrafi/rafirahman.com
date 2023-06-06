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
        <Stack className="skill-list" style={{ flexWrap: "wrap" }} direction='horizontal' gap={1}>
            {data.map((skill: string, i: number) => (
                <SkillItem skill={skill} key={i}></SkillItem>
            ))}
        </Stack>
    )

}

function SkillItem({ skill }) {
    return (
        <Badge className="skill-item" pill bg='light'>
            {skill.name}
        </Badge>
    )
}
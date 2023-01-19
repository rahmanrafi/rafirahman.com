import * as React from "react";
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SectionHeader } from "./common/SectionHeader";
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge';

const SLContainer = styled.ul`
  padding-left: unset;
  width: auto;
`
export function SkillList({ skills }) {
  if (!skills) {
    return (
      <Skeleton width={'50%'} inline={true} />
    )
  }
  return (
      <SLContainer className='collection'>
        <SectionHeader title='Skills'></SectionHeader>
        <Stack style={{flexWrap: 'wrap'}} direction='horizontal' gap={1}>
            {skills.map((skill, index) => (
              <SkillItem skill={skill} key={`skill-${index}`}></SkillItem>
            ))}
        </Stack>
      </SLContainer>
  );
}

function SkillItem({ skill }) {
  return (
    <Badge pill bg='light'>
      {skill.name}
    </Badge>
  )
}
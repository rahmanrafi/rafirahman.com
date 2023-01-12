import * as React from "react";
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkillsContainer = styled.ul`
  width: auto;
`

const SkillItem = styled.li`
  display: inline-flex;
  color: rgb(81, 81, 81);
  background-color: rgb(230, 230, 230);
  border: 0.5px solid rgb(139, 139, 139);
  border-radius: 50px;
  line-height: 1rem;
  padding: 3px 8px;
`

export function SkillsComponent({ resumeData }) {
  if (!resumeData?.skills) {
    return (
      <Skeleton width={'50%'} inline={true} />
    )
  }
  const skills = resumeData.skills;
  return (
    <SkillsContainer class='collection'>
      {skills.map(skill => (
        <SkillItem>{skill.name}</SkillItem>
      ))}
    </SkillsContainer>
  );
}

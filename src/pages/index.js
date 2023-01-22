import * as React from "react"
import 'react-bootstrap'
// import { render } from "react-dom"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { getResume } from "../../api/resume"
import { ResumeHeader } from "../components/ResumeHeader"
import { SkillList } from "../components/SkillList"
import { TimelineSection } from "../components/common/TimelineSection"
import "../styles/resume.css"

const IndexPageComponent = () => {
  const [resumeData, setData] = React.useState('')
  React.useEffect(() => {
    const fetchData = async () => {
      const resumeData = await getResume()
      setData(resumeData)
    }
    fetchData()
  }, [])
  return (
    <main>
      <ResumeHeader data={resumeData}></ResumeHeader>
      <TimelineSection sectionName='Experience' data={resumeData?.work}></TimelineSection>
      <TimelineSection sectionName='Education' data={resumeData?.education}></TimelineSection>
      <SkillList skills={resumeData?.skills}></SkillList>
    </main>
  )
}

export default IndexPageComponent

export const Head = () => <title>Rafi Rahman - Resume</title>

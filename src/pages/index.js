import * as React from "react"
import 'react-bootstrap'
import { getResume } from "../../api/getResume"
import { ResumeHeader } from "../components/ResumeHeader"
import { SkillList } from "../components/SkillList"
import { TimelineSection } from "../components/common/TimelineSection"
import { ExperienceSection } from "../components/ExperienceSection"
import { EducationSection } from "../components/EducationSection"
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
            <TimelineSection sectionName='Experience' className="experience-section" ready={resumeData} children={ExperienceSection(resumeData?.work)} />
            <TimelineSection sectionName='Education' className="education-section" ready={resumeData} children={EducationSection(resumeData?.education)} />
            <TimelineSection sectionName='Skills' className="skills-section" ready={resumeData} children={SkillList(resumeData?.skills)} />
        </main>
    )
}

export default IndexPageComponent

export const Head = () => <title>Rafi Rahman - Resume</title>

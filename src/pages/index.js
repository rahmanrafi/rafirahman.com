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

    let mainContainerStyle = {}
    if(resumeData?.printOptions?.inlineDates) {
        let root = document.documentElement
        root.style.setProperty('--main-container-left-padding', "30px")
    }
    return (
        <main style={mainContainerStyle}>
            <ResumeHeader data={resumeData}></ResumeHeader>
            <TimelineSection sectionName='Experience' className="experience-section" data={resumeData} children={ExperienceSection(resumeData)} />
            <TimelineSection sectionName='Education' className="education-section" data={resumeData} children={EducationSection(resumeData)} />
            <TimelineSection sectionName='Skills' className="skills-section" data={resumeData} children={SkillList(resumeData?.skills)} />
        </main>
    )
}

export default IndexPageComponent

export const Head = () => <title>Rafi Rahman - Resume</title>

import * as React from "react"
import 'react-bootstrap'
// import { render } from "react-dom"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { getResume } from "../../api/resume"
import { ResumeHeader } from "../components/ResumeHeader"
import { SkillList } from "../components/SkillList"
import "../styles/resume.css"

const pageStyles = {
  color: "#232129",
  paddingLeft: 48,
}

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
    <main style={pageStyles}>
      <ResumeHeader data={resumeData}></ResumeHeader>
      <SkillList skills={resumeData?.skills}></SkillList>
    </main>
  )
}

export default IndexPageComponent

export const Head = () => <title>Rafi Rahman - Resume</title>

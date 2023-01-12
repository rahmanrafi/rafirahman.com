import * as React from "react"
import { render } from "react-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { getResume } from "../../api/resume"
import { HeadingComponent } from "../components/HeadingComponent"
import { SkillsComponent } from "../components/SkillsComponent"
import "../styles/resume.css"

const pageStyles = {
  color: "#232129",
  paddingLeft: 48,
}
const headingStyles = {                                 
  marginTop: 0,
  // marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  // marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [

]


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
      {HeadingComponent({resumeData})}
      <br></br>
      {SkillsComponent({resumeData})}
      <span style={badgeStyle} aria-label="New Badge">NEW!</span><p style={paragraphStyles}>Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time. 😎
      </p>
    </main>
  )
}

// const IndexPage = () => {
//   getResume().then((data) => {
//     console.log(data)
//     var resumeData = data
//   })
// }

export default IndexPageComponent

export const Head = () => <title>Rafi Rahman - Resume</title>

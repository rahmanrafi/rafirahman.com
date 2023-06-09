// const axios = require('axios');
// const resumeEndpoint = 'https://gitconnected.com/v1/portfolio/rahmanrafi'

import resumeData from "../local/resume"
import overrides from "../local/overrides"

export async function getResume() {
    // const response = await axios.get(resumeEndpoint)
    // const resumeData = response.data
    resumeData = JSON.parse(resumeData)
    await new Promise(r => setTimeout(r, 1500))
    return postProcessResumeData(resumeData)
}

function postProcessResumeData(resumeData) {
    for (var i = 0; i < resumeData.basics.profiles.length; i++) {
        const profile = resumeData.basics.profiles[i]
        if (profile.network === "gitconnected") {
            resumeData.basics.profiles.splice(i, 1)
            break
        }
    }
    
    for(const education of resumeData.education) {
        if (education.institution in overrides?.schoolLocations ?? {}) {
            education.location = overrides.schoolLocations[education.institution]
        }
        if (education.institution in overrides?.schoolAwardersMap ?? {}) {
            const eduStartDate = new Date(education.startDate)
            const eduEndDate = new Date(education.endDate)
            const eduAwards = []
            for(const award of resumeData.awards) {
                if (award.awarder === overrides.schoolAwardersMap[education.institution]) {
                    const awardDate = new Date(award.date)
                    if (awardDate >= eduStartDate && awardDate <= eduEndDate) {
                        eduAwards.push(award)
                    }
                }
            }
            education.awards = eduAwards
        }
    }

    for(const work of resumeData.work) {
        if (work?.location ?? "" in overrides?.locationOverrides ?? {}) {
            work.location = overrides.locationOverrides[work.location]
        }
    }

    if (overrides?.email) {
        resumeData.basics.email = overrides.email
    }

    if (overrides?.phone) {
        resumeData.basics.phone = overrides.phone
    }

    if (overrides?.printOptions) {
        resumeData.printOptions = overrides.printOptions 
    }
    
    return resumeData
}
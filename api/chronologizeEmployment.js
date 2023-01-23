export function chronologizeEmployment(employmentArray) {
    let chronologizedEmployment = []
    let currIterEmployer

    function setCurrEmployer(role){
        let employer = (({ company, website }) => ({company, website}))(role)
        employer.roles = [subsetRole(role)]
        return employer
    }

    function subsetRole(role) {
        let {company, website, name, url, ...subset} = role
        if (role.isCurrentRole) {
            role.endDate = 'Present'
        }
        return subset
    }

    for (const role of employmentArray) {
        if (currIterEmployer && currIterEmployer.company == role.company) {
            currIterEmployer.roles.push(subsetRole(role))
        } else {
            if (currIterEmployer) {
                chronologizedEmployment.push(currIterEmployer)
            }
            currIterEmployer = setCurrEmployer(role)
        }
    }

    if (currIterEmployer) {
        chronologizedEmployment.push(currIterEmployer)
    }

    console.log(chronologizedEmployment)
    return chronologizedEmployment
}
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import objectSupport from 'dayjs/plugin/objectSupport'

dayjs.extend(relativeTime)
dayjs.extend(objectSupport)


const dateFormat = 'MMM. YYYY'

export function formatTime(timeObject) {
    if (timeObject?.month) {
        timeObject.month -= 1
    }
    let datetime = dayjs(timeObject);
    let timestamp = Object.keys(timeObject).length ? datetime.format(dateFormat) : 'Present';
    return [datetime, timestamp];
}

export function chronologizeRoles(roles) {
    let chronologizedEmployment = []
    let currIterEmployer

    function setCurrEmployer(role){
        let employer = (({ company, website }) => ({company, website}))(role)
        employer.roles = [formatRole(role)]
        return employer
    }

    function formatRole(role) {
        [role.start, role.startDate] = formatTime(role.start);
        [role.end, role.endDate] = formatTime(role.end);
        role.duration = role.start.to(role.end, true);
        let {company, website, name, url, ...subset} = role
        return subset
    }

    for (const role of roles) {
        if (currIterEmployer && currIterEmployer.company == role.company) {
            currIterEmployer.roles.push(formatRole(role))
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

    return chronologizedEmployment
}
const cameroonNumber=(phone)=>{
    if(/(\+237|237)(6|2)(2|3|[5-9])[0-9]{7}/g.test(phone)) return true
    return false
}

const validateEmail=(email)=>{
    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    return true
    return false
}

export{cameroonNumber, validateEmail}
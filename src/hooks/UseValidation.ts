import {useEffect, useState} from "react";


export const UseValidation = (value: any, validations: any) => {
    const [isEmpty, setEmpty] = useState<boolean>(true)
    const [minLengthError, setMinLengthError] = useState<boolean>(false)
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [inputValid, setInputValid] = useState<boolean>(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break
                case "isEmpty":
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case "maxLengthError":
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break
                case "emailError":
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty || minLengthError || maxLengthError || emailError])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        inputValid
    }
}

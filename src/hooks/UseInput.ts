import {useState} from "react";
import {UseValidation} from "./UseValidation";


export const UseInput = (initialValue: any, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = UseValidation(value, validations)

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    const onBlur = (e: any) => {
        setDirty(true)
    }

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...valid
    }
}

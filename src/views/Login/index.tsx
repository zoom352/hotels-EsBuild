import React from "react";
import Input from "../../UI/Input";
import {UseInput} from "../../hooks/UseInput";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {isAuthSlice} from "../../store/reducers/AuthSlice";

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const email = UseInput("", {isEmpty: true, minLength: 3, maxLengthError: 25, emailError: true})
    const password = UseInput("", {isEmpty: true, minLength: 5, maxLengthError: 8})

    return <div>
        <h1>Register</h1>
        {(email.isDirty && email.isEmpty) && <div style={{color: "red"}}>Area cannot be empty</div>}
        {(email.isDirty && email.minLengthError) && <div style={{color: "red"}}>incorrect length</div>}
        {(email.maxLengthError) && <div style={{color: "red"}}>too much symbols</div>}
        {(email.emailError) && <div style={{color: "red"}}>incorrect email</div>}
        <Input
            onChange={(event: any) => email.onChange(event)}
            value={email.value}
            onBlur={(event: any) => email.onBlur(event)}
            name="email"
            type="text"
        />
        {(password.isDirty && password.isEmpty) && <div style={{color: "red"}}>Area cannot be empty</div>}
        {(password.isDirty && password.minLengthError) && <div style={{color: "red"}}>incorrect length</div>}
        {(password.maxLengthError) && <div style={{color: "red"}}>too much symbols</div>}
        <Input
            onChange={(event: any) => password.onChange(event)}
            value={password.value}
            onBlur={(event: any) => password.onBlur(event)}
            name="password"
            type="text"
        />
        <button
            disabled={!email.inputValid || !password.inputValid}
            onClick={() => {
                navigate(RouteNames.HOTELS)
                dispatch(isAuthSlice.actions.setIsAuth(true))}
            }
        >Enter</button>
        {/*<button onClick={() => navigate(RouteNames.HOTELS)}>Enter</button>*/}
    </div>
}

export default Login

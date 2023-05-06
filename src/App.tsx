import React, {useEffect, useState} from 'react';
import './index.css'
// @ts-ignore
import Logo from './Logo.png'
import {Routes, Route, useNavigate} from 'react-router-dom';
import {IRoute, privateRoutes, publicRoutes, RouteNames} from "./router";
// import { Route, Switch, Redirect } from "react-router-dom"


// const App = () => {
//     const [isAuth, setIsAuth] = useState(true)
//     return (
//         isAuth ?
//             <Switch> {privateRoutes.map(route => <Route
//                     path={route.path}
//                     exact={route.exact}
//                     component={route.component}
//                     key={route.path}
//                 />
//             )}
//                 <Redirect to={RouteNames.HOTELS}/>
//             </Switch>
//             :
//             <Switch>
//                 {publicRoutes.map(route => <Route path={route.path}
//                                                   exact={route.exact}
//                                                   component={route.component}
//                                                   key={route.path}/>
//                 )}
//                 <Redirect to={RouteNames.LOGIN}/>
//             </Switch>
//     )
// }

const App = () => {
    const [isAuth, setIsAuth] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate(RouteNames.LOGIN)
        }
        else {
            navigate(RouteNames.HOTELS)
        }
    }, [isAuth])

    return (
        <Routes>
            {isAuth ? privateRoutes.map((route: any) => (
                <Route key={route.path} path={route.path} element={<route.Element />} exact={route.exact} />
            )) : publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.Element />} exact={route.exact} />
            ))}
        </Routes>
    )
}

export default App

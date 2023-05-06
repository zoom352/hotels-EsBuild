import React from "react";
import HotelList from "../views/HotelList";
import Login from "../views/Login/index";
// import Login from '../pages/Login'
// import Event from '../pages/Event'

export interface IRoute {
    path: string;
    Element: React.ComponentType;
    exact?: boolean
}

export enum RouteNames {
    LOGIN = '/login',
    HOTELS = '/hotels'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, Element: Login }
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOTELS, exact: true, Element: HotelList }
]

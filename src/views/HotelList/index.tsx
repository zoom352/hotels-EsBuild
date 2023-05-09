import WorkBox from "../../Components/workBox/workBox";
import SimpleSlider from "../../Components/Slider/Slider";
import React, {useEffect, useState} from "react";
import "./hotelList.module.css"
import CardIcon from "../../Components/Card/cardIcon";
import Card from "../../Components/Card/card";
import SearchHotels from "../../Components/SearchHotels";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchHotelsThunk} from "../../store/reducers/ActionCreators";
import {hotelSlice} from "../../store/reducers/HotelsSlice";
import Select from "../../UI/select"
import {IHotel} from "../../models/IHotel";
import {RouteNames} from "../../router";
import {isAuthSlice} from "../../store/reducers/AuthSlice";
import {useNavigate} from "react-router-dom";

const SliderData = [
    {
        image:
            'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        image:
            'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
    },
    {
        image:
            'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    },
    {
        image:
            'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    },
    {
        image:
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    }
]

const Price = [
    { label: 'Sort price ascending', value: 'AscendingPrice' },
    { label: 'Sort price descending', value: 'DescendingPrice' }
]

const rating = [
    { label: 'Sort rating ascending', value: 'AscendingRating' },
    { label: 'Sort rating descending', value: 'DescendingRating' }
]

const HotelList = () => {
    const {
        isLoading,
        checkIn,
        query,
        favoriteHotels
    } = useAppSelector(state => state.hotelReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function getSelectByValue (event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value
        switch (value) {
            case 'AscendingPrice':
                // @ts-ignore
                dispatch(hotelSlice.actions.favoriteHotelsSortAscendingPrice())
                break
            case 'DescendingPrice':
                // @ts-ignore
                dispatch(hotelSlice.actions.favoriteHotelsSortDescendingPrice())
                break
            case 'AscendingRating':
                // @ts-ignore
                dispatch(hotelSlice.actions.favoriteHotelsSortAscendingStars())
                break
            case 'DescendingRating':
                // @ts-ignore
                dispatch(hotelSlice.actions.favoriteHotelsSortDescendingStars())
                break
        }
    }

    // Создаем объект Date из строки
    const inputDate = new Date(checkIn)

    // Получаем день, месяц и год из объекта Date
    const day = inputDate.getDate()
    const month = inputDate.toLocaleString("default", { month: "long" })
    const year = inputDate.getFullYear()

    // Создаем новую строку в формате "день месяц год"
    const outputDateStr = `${day} ${month} ${year}`;

    useEffect(() => {
        dispatch(fetchHotelsThunk())
    }, [])

    const deleteFavoriteHotel = (hotelId: string) => {
        dispatch(hotelSlice.actions.favoriteHotelsDelete({
            hotelId
        }))
    }

    const addFavoriteHotel = (hotelId: string) => {
        dispatch(hotelSlice.actions.favoriteHotelsAdd({
            hotelId
        }))
    }

    return (
        <div className="wrap">
            <h2 className="exit" onClick={() => {
                navigate(RouteNames.LOGIN)
                dispatch(isAuthSlice.actions.setIsAuth(false))}
            }>Exit</h2>
            <div className="wrapperBlocks">
                <WorkBox height={464} width={402}>
                    <SearchHotels />
                </WorkBox>
                <div style={{ marginTop: "19px"}}>
                    <WorkBox height={464} width={402}>
                        <Select
                            defaultValue="default"
                            options={Price}
                            onChange={getSelectByValue}
                        />
                        <Select
                            defaultValue="default"
                            options={rating}
                            onChange={getSelectByValue}
                        />
                        <h2 style={{ marginTop: "19px"}}>Favorites</h2>
                        <div style={{height: "420px"}} className="prokrutka">
                            {favoriteHotels.map((item: IHotel) => {
                                return (
                                    <Card
                                        outputDateStr={outputDateStr}
                                        hotelId={item.hotelId}
                                        deleteFavoriteHotel={deleteFavoriteHotel}
                                        withoutIcon={true}
                                        hotelName={item.hotelName}
                                        stars={item.stars}
                                        price={item.priceAvg}
                                    />
                                )
                            })}
                        </div>
                    </WorkBox>
                </div>
            </div>
            <WorkBox height={946} width={602}>
                <div className="wrapperList">
                     <div className="title">
                        <h3>Hotels @ {query}</h3>
                        <h3 className="dateTitle">{outputDateStr}</h3>
                    </div>
                        <SimpleSlider
                            SliderData={SliderData}
                        />
                        <h3>add to favorites: {favoriteHotels.length} hotels</h3>
                        <div style={{height: "680px"}} className="prokrutka">
                            {isLoading ?
                                <h2>Loading...</h2>
                                : <CardIcon
                                      outputDateStr={outputDateStr}
                                      deleteFavoriteHotel={deleteFavoriteHotel}
                                      addFavoriteHotel={addFavoriteHotel}
                            />}
                        </div>
                </div>
            </WorkBox>
        </div>
    )
}

export default HotelList

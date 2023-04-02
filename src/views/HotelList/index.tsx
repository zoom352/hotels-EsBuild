import WorkBox from "../../Components/workBox/workBox";
import SimpleSlider from "../../Components/Slider/Slider";
import React, {useEffect} from "react";
import "./hotelList.module.css"
import CardIcon from "../../Components/Card/cardIcon";
import Card from "../../Components/Card/card";
import SearchHotels from "../../Components/SearchHotels";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchHotelsThunk} from "../../store/reducers/ActionCreators";

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

const HotelList = () => {
    const {
        hotels,
        days,
        isLoading,
        checkIn,
        favoriteHotels
    } = useAppSelector(state => state.hotelReducer)
    // const {
    //     data: hotels, isLoading
    // } = hotelAPI.useFetchAllHotelsQuery<any>({
    //     query: "moscow",
    //     lang: "ru",
    //     lookFor: "both",
    //     limit: "10"
    // })
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchHotelsThunk())
    }, [])

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="wrap">
            <div className="wrapperBlocks">
                <WorkBox height={464} width={402}>
                    <SearchHotels />
                </WorkBox>
                <div style={{ marginTop: "19px"}}>
                    <WorkBox height={464} width={402}>
                        <h2 style={{ marginTop: "19px"}}>Favorites</h2>
                        <div style={{height: "420px"}} className="prokrutka">
                            {favoriteHotels.map((item) => {
                                return (
                                    <Card
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
                        <h3>Отели @ Киев</h3>
                        <h3 className="dateTitle">20 Января 2023</h3>
                    </div>
                        <SimpleSlider
                            SliderData={SliderData}
                        />
                        <h3>Добавленно в избранное: 3 отеля</h3>
                        <div style={{height: "680px"}} className="prokrutka">
                        <CardIcon />
                        </div>
                </div>
            </WorkBox>
        </div>
    )
}

export default HotelList

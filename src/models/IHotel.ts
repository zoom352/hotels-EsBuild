export interface IHotel {
    locationId: number
    hotelId: number,
    pricePercentile: Object
    stars: number
    priceFrom: number
    hotelName: string
    priceAvg: number
    location: Object
    geo: Object,
    color?: string
}

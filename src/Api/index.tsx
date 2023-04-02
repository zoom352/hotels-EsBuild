import axios, { AxiosResponse } from "axios";
import config from "../config";

class PostService {
    axios: any;
    static axios: any;
    constructor() {
        this.axios = axios.create({ baseURL: `${config.host}/api/v2/`})
    }
    async getAll(search: any, checkIn: any, checkOut: any, limit: any): Promise<AxiosResponse<any>> {
        return this.axios.get(`cache.json?location=${search || 'Moscow'}&currency=rub&checkIn=${checkIn || '2023-12-12'}&checkOut=${checkOut || "2023-12-13"}&limit=${limit}`)
    }
}

export default new PostService()

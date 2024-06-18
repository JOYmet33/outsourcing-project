import axios from "axios";

const API_KEY = import.meta.env.VITE_CAMPSITE_API_KEY;
const BASE_URL = import.meta.env.VITE_CAMPSITE_URL;

class CampsiteAPI {
  #client;
  #baseURL = BASE_URL;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
  }
  async getBasedList() {
    const path = "/basedList";
    const res = await this.#client.get(path, {
      params: {
        numOfRows: 100,
        MobileOS: "ETC",
        MobileApp: "AppTest",
        serviceKey: API_KEY,
        _type: "json",
      },
    });
    return res.data;
  }

  async getListWithLocation({ mapX, mapY }) {
    const path = "/locationBasedList";
    const res = await this.#client.get(path, {
      params: {
        numOfRows: 100,
        pageNo: 1,
        MobileOS: "ETC",
        MobileApp: "AppTest",
        serviceKey: API_KEY,
        mapX,
        mapY,
        radius: 20000,
        _type: "json",
      },
    });
    return res.data.response.body.items.item;
  }
  async getListWithKeyword(keyword) {
    const path = "/searchList";
    const res = await this.#client.get(path, {
      params: {
        numOfRows: 500,
        pageNo: 1,
        MobileOS: "ETC",
        MobileApp: "AppTest",
        serviceKey: API_KEY,
        keyword,
        _type: "json",
      },
    });
    return res.data.response.body.items.item;
  }
}

const campsiteApi = new CampsiteAPI();

export default campsiteApi;

import axios from "axios";
import type { Menu } from "../types/Menu";

interface FetchMenuParams {
    menuCategory?: string;
    releaseStatus?: string;
}

export function fetchMenuList(params: FetchMenuParams) {
    return axios.get<Menu[]>("/api/menu/menuList", {
        params,
    });
}

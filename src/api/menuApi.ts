import api from "./axios";

export interface MenuListParams {
    menuCategory?: string;
    releaseStatus?: string;
}

export const fetchMenuList = (params?: MenuListParams) => {
    return api.get("/api/menu/menuList", {
        params,
    });
};
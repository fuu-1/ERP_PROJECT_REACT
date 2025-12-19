import api from "./axios";

export const fetchMenuList = (params?: {
    menuCategory?: string;
    releaseStatus?: string;
}) => {
    return api.get("/api/menu/menuList", { params });
};
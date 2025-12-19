import api from "./axios";

export interface MenuListParams {
    menuCategory?: string;
    releaseStatus?: string;
}

/**
 * 메뉴 목록 조회
 * GET /api/menu/menuList
 */
export const fetchMenuList = (params?: MenuListParams) => {
    return api.get("/api/menu/menuList", {
        params,
    });
};
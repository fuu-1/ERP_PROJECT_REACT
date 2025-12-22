import api from "./axios";

export interface StoreListParams {
    storeStatus?: string;
    address?: string;
    storeName?: string;
    managerName?: string;
    page?: number;
}

export const fetchStoreList = (params?: StoreListParams) => {
    return api.get("/getStoreList", {
        params,
    });
};

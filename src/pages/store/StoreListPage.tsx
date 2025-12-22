import { useEffect, useState } from "react";
import { fetchStoreList } from "../../api/storeApi";
import StoreList from "./StoreList";
import PageContainer from "../../layout/PageContainer";
import type { Store } from "../../types/Store";

const StoreListPage = () => {
    const [storeStatus, setStoreStatus] = useState("all");
    const [searchType, setSearchType] = useState("region");
    const [keyword, setKeyword] = useState("");
    const [storeList, setStoreList] = useState<Store[]>([]);

    useEffect(() => {
        const params: any = { page: 0 };

        if (storeStatus !== "all") params.storeStatus = storeStatus;
        if (searchType === "region") params.address = keyword;
        if (searchType === "storename") params.storeName = keyword;
        if (searchType === "manager") params.managerName = keyword;

        fetchStoreList(params)
            .then(res => setStoreList(res.data.content))
            .catch(() => setStoreList([]));
    }, [storeStatus, searchType, keyword]);

    return (
        <PageContainer title="직영점 목록 조회">
            <StoreList
                storeStatus={storeStatus}
                searchType={searchType}
                keyword={keyword}
                storeList={storeList}
                onChangeStoreStatus={setStoreStatus}
                onChangeSearchType={setSearchType}
                onChangeKeyword={setKeyword}
            />
        </PageContainer>
    );
};

export default StoreListPage;
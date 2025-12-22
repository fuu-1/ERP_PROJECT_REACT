import { useEffect, useState } from "react";
import {fetchStoreList, type StoreListParams} from "../../api/storeApi";
import StoreList from "./StoreList";
import PageContainer from "../../layout/PageContainer";
import type { Store } from "../../types/Store";
import StoreMap from "./StoreMap.tsx";

const StoreListPage = () => {
    const [storeStatus, setStoreStatus] = useState("all");
    const [searchType, setSearchType] = useState("region");
    const [keyword, setKeyword] = useState("");
    const [storeList, setStoreList] = useState<Store[]>([]);

    useEffect(() => {
        const params: StoreListParams  = { page: 0 };

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
            <div className="row">
                <div className="col-7">
                    <StoreList
                        storeStatus={storeStatus}
                        searchType={searchType}
                        keyword={keyword}
                        storeList={storeList}
                        onChangeStoreStatus={setStoreStatus}
                        onChangeSearchType={setSearchType}
                        onChangeKeyword={setKeyword}
                    />
                </div>

                <div className="col-5">
                    <StoreMap stores={storeList} />
                </div>
            </div>
        </PageContainer>
    );
};

export default StoreListPage;
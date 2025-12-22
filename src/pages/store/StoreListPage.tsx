import { useState } from "react";
import { fetchStoreList, type StoreListParams } from "../../api/storeApi";
import StoreList from "./StoreList";
import PageContainer from "../../layout/PageContainer";
import type { Store } from "../../types/Store";
import StoreMap from "./StoreMap";

const StoreListPage = () => {
    const [storeStatus, setStoreStatus] = useState<"all" | "영업중" | "오픈준비" | "폐업">("all");
    const [searchType, setSearchType] = useState<"region" | "storename" | "manager">("region");
    const [keyword, setKeyword] = useState("");
    const [storeList, setStoreList] = useState<Store[]>([]);

    const handleSearch = () => {
        const params: StoreListParams = { page: 0 };

        if (storeStatus !== "all") {
            params.storeStatus = storeStatus;
        }

        if (keyword.trim() !== "") {
            if (searchType === "region") params.address = keyword;
            if (searchType === "storename") params.storeName = keyword;
            if (searchType === "manager") params.managerName = keyword;
        }

        fetchStoreList(params)
            .then(res => setStoreList(res.data.content))
            .catch(() => setStoreList([]));
    };

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
                        onSearch={handleSearch}
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

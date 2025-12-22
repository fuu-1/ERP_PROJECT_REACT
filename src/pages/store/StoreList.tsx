import type { Store } from "../../types/Store";

type Props = {
  storeStatus: "all" | "영업중" | "오픈준비" | "폐업";
  searchType: "region" | "storename" | "manager";
  keyword: string;
  storeList: Store[];
  onChangeStoreStatus: (v: Props["storeStatus"]) => void;
  onChangeSearchType: (v: Props["searchType"]) => void;
  onChangeKeyword: (v: string) => void;
  onSearch: () => void;
};

const StoreList = (props: Props) => {
  return (
      <>
        {/* 필터 영역 */}
        <div className="d-flex justify-content-end gap-3 mb-3">
          <select
              className="form-select w-auto"
              value={props.storeStatus}
              onChange={e =>
                  props.onChangeStoreStatus(e.target.value as Props["storeStatus"])
              }
          >
            <option value="all">전체</option>
            <option value="영업중">영업중</option>
            <option value="오픈준비">오픈준비</option>
            <option value="폐업">폐업</option>
          </select>

          <select
              className="form-select w-auto"
              value={props.searchType}
              onChange={e =>
                  props.onChangeSearchType(e.target.value as Props["searchType"])
              }
          >
            <option value="region">지역</option>
            <option value="storename">직영점명</option>
            <option value="manager">점장명</option>
          </select>

          <input
              className="form-control w-auto"
              value={props.keyword}
              onChange={e => props.onChangeKeyword(e.target.value)}
              placeholder="검색어 입력"
          />

          <button
              className="btn btn-custom-yellow"
              onClick={props.onSearch}
          >
            검색
          </button>
        </div>

        {/* 목록 */}
        <table className="table table-hover text-center align-middle">
          <thead>
          <tr>
            <th>번호</th>
            <th>직영점명</th>
            <th>지역</th>
            <th>점장명</th>
            <th>상태</th>
          </tr>
          </thead>
          <tbody>
          {props.storeList.map(store => (
              <tr key={store.storeNo}>
                <td>{store.storeNo}</td>
                <td>{store.storeName}</td>
                <td>{store.address}</td>
                <td>{store.managerName}</td>
                <td>{store.storeStatus}</td>
              </tr>
          ))}

          {props.storeList.length === 0 && (
              <tr>
                <td colSpan={5} className="text-muted py-4">
                  조회된 직영점이 없습니다
                </td>
              </tr>
          )}
          </tbody>
        </table>
      </>
  );
};

export default StoreList;

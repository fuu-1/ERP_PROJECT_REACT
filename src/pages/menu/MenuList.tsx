import { Fragment } from "react";
import type { GroupedMenu } from "./utils/MenuGroup";

type Props = {
  groupedMenus: GroupedMenu[];
  category: string;
  releaseStatus: string;
  viewMode: "list" | "image";
  onChangeCategory: (v: string) => void;
  onChangeReleaseStatus: (v: string) => void;
  onChangeViewMode: (v: "list" | "image") => void;
};

const MenuList = (props: Props) => {
  return (
      <>
        <div className="d-flex align-items-center gap-4 mb-3">
          <select
              className="form-select w-auto"
              value={props.category}
              onChange={e => props.onChangeCategory(e.target.value)}
          >
            <option value="">전체</option>
            <option value="피자">피자</option>
            <option value="사이드디시">사이드디시</option>
            <option value="음료">음료</option>
            <option value="기타">기타</option>
          </select>

          <select
              className="form-select w-auto"
              value={props.releaseStatus}
              onChange={e => props.onChangeReleaseStatus(e.target.value)}
          >
            <option value="">전체</option>
            <option value="출시 중">출시 중</option>
            <option value="출시 예정">출시 예정</option>
            <option value="출시 중단">출시 중단</option>
          </select>

          <div className="ms-auto">
            <button
                className={`btn btn-sm ${
                    props.viewMode === "list" ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => props.onChangeViewMode("list")}
            >
              목록
            </button>
            <button
                className={`btn btn-sm ms-2 ${
                    props.viewMode === "image" ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => props.onChangeViewMode("image")}
            >
              이미지
            </button>
          </div>
        </div>

        {props.viewMode === "list" && (
            <table className="table text-center align-middle">
              <thead className="table-light">
              <tr>
                <th>카테고리</th>
                <th>코드</th>
                <th>메뉴명</th>
                <th>사이즈</th>
                <th>가격</th>
                <th>상태</th>
              </tr>
              </thead>
              <tbody>
              {props.groupedMenus.map(group => (
                  <Fragment key={group.menuCode}>
                    {group.items.map((item, idx) => (
                        <tr key={item.menuNo}>
                          {idx === 0 && (
                              <>
                                <td rowSpan={group.items.length}>{group.menuCategory}</td>
                                <td rowSpan={group.items.length}>{group.menuCode}</td>
                                <td rowSpan={group.items.length}>{group.menuName}</td>
                              </>
                          )}
                          <td>{item.size}</td>
                          <td>{item.menuPrice.toLocaleString()}원</td>
                          {idx === 0 && (
                              <td rowSpan={group.items.length}>{group.releaseStatus}</td>
                          )}
                        </tr>
                    ))}
                  </Fragment>
              ))}
              </tbody>
            </table>
        )}

        {props.viewMode === "image" && (
            <div className="row g-3">
              {props.groupedMenus.map(group => (
                  <div key={group.menuCode} className="col-6 col-md-3">
                    <div className="border rounded p-2 text-center">
                      <div className="fw-bold mb-2">{group.menuName}</div>
                      {group.items.map(item => (
                          <div key={item.menuNo}>
                            {item.size} / {item.menuPrice.toLocaleString()}원
                          </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
        )}
      </>
  );
};

export default MenuList;
import { useState } from "react";
import "./menu.css";

const DUMMY_MENU_LIST = [
  {
    menuNo: 1,
    menuCategory: "피자",
    menuCode: "P001",
    menuName: "불고기 피자",
    size: "L",
    menuPrice: 25000,
    releaseStatus: "출시 중",
  },
  {
    menuNo: 2,
    menuCategory: "피자",
    menuCode: "P001",
    menuName: "불고기 피자",
    size: "M",
    menuPrice: 22000,
    releaseStatus: "출시 중",
  },
  {
    menuNo: 3,
    menuCategory: "음료",
    menuCode: "D001",
    menuName: "콜라",
    size: "500ml",
    menuPrice: 2000,
    releaseStatus: "출시 중단",
  },
];

const CATEGORY_OPTIONS = [
  { value: "", label: "전체" },
  { value: "피자", label: "피자" },
  { value: "사이드디시", label: "사이드디시" },
  { value: "음료", label: "음료" },
  { value: "기타", label: "기타" },
];

const RELEASESTATUS_OPTIONS = [
  { value: "", label: "전체" },
  { value: "출시 중", label: "출시 중" },
  { value: "출시 중단", label: "출시 중단" },
  { value: "출시 예정", label: "출시 예정" },
];

const MenuListPage = () => {
  const [category, setCategory] = useState("");
  const [releaseStatus, setReleaseStatus] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "image">("list");
  const [menuList] = useState(DUMMY_MENU_LIST);

  const filteredMenuList = menuList.filter((menu) => {
    const categoryMatch =
      category === "" || menu.menuCategory === category;
    const statusMatch =
      releaseStatus === "" || menu.releaseStatus === releaseStatus;
    return categoryMatch && statusMatch;
  });

  const renderListView = () => (
    <div className="mt-3">
      <table className="table text-center align-middle bg-white">
        <thead className="table-light">
          <tr>
            <th>카테고리</th>
            <th>메뉴 코드</th>
            <th>메뉴 명</th>
            <th>사이즈</th>
            <th>가격</th>
            <th>출시 상태</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          {filteredMenuList.map((menu) => (
            <tr key={menu.menuNo}>
              <td>{menu.menuCategory}</td>
              <td>{menu.menuCode}</td>
              <td>{menu.menuName}</td>
              <td>{menu.size}</td>
              <td>{menu.menuPrice.toLocaleString()}원</td>
              <td>{menu.releaseStatus}</td>
              <td>
                <button className="btn btn-sm btn-outline-secondary">
                  상세
                </button>
              </td>
            </tr>
          ))}
          {filteredMenuList.length === 0 && (
            <tr>
              <td colSpan={7} className="text-muted py-4">
                조회된 메뉴가 없습니다
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  const renderImageView = () => (
    <div className="row g-3 mt-3">
      {filteredMenuList.map((menu) => (
        <div className="col-6 col-md-3" key={menu.menuNo}>
          <div className="border rounded p-2 bg-white text-center">
            <img
              src="/images/menu-placeholder.png"
              alt={menu.menuName}
              className="img-fluid mb-2"
              style={{ height: 120, objectFit: "cover" }}
            />
            <div className="fw-semibold">{menu.menuName}</div>
          </div>
        </div>
      ))}
      {filteredMenuList.length === 0 && (
        <div className="col-12 text-center text-muted py-5">
          조회된 메뉴가 없습니다
        </div>
      )}
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="bg-white border rounded p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">메뉴 조회</h2>
        </div>

        <div className="d-flex align-items-center mb-3 gap-4">
          <div>
            <label className="fw-semibold me-2">카테고리</label>
            <select
              className="form-select d-inline-block w-auto"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="fw-semibold me-2">출시 상태</label>
            <select
              className="form-select d-inline-block w-auto"
              value={releaseStatus}
              onChange={(e) => setReleaseStatus(e.target.value)}
            >
              {RELEASESTATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="ms-auto d-flex align-items-center gap-2">
            <span className="fw-semibold">보기</span>
            <button
              className={
                viewMode === "list"
                  ? "btn btn-dark btn-sm"
                  : "btn btn-outline-dark btn-sm"
              }
              onClick={() => setViewMode("list")}
            >
              목록
            </button>
            <button
              className={
                viewMode === "image"
                  ? "btn btn-dark btn-sm"
                  : "btn btn-outline-dark btn-sm"
              }
              onClick={() => setViewMode("image")}
            >
              이미지
            </button>
          </div>
        </div>

        {viewMode === "list" && renderListView()}
        {viewMode === "image" && renderImageView()}
      </div>
    </div>
  );
};

export default MenuListPage;

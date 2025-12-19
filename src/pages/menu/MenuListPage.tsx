import { useEffect, useState, Fragment } from "react";
import { fetchMenuList } from "../../api/menuApi";
import { groupByMenuCode } from "./utils/MenuGroup";
import type { Menu } from "../../types/Menu";
import "./menu.css";

const MenuListPage = () => {
    const [category, setCategory] = useState("");
    const [releaseStatus, setReleaseStatus] = useState("");
    const [viewMode, setViewMode] = useState<"list" | "image">("list");
    const [menuList, setMenuList] = useState<Menu[]>([]);

    useEffect(() => {
        fetchMenuList({
            menuCategory: category || undefined,
            releaseStatus: releaseStatus || undefined,
        })
            .then(res => setMenuList(res.data))
            .catch(() => setMenuList([]));
    }, [category, releaseStatus]);

    const groupedMenus = groupByMenuCode(menuList);

    return (
        <div className="container mt-5">
            {/* 필터 영역 */}
            <div className="d-flex gap-4 mb-3">
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">전체</option>
                    <option value="피자">피자</option>
                    <option value="사이드디시">사이드디시</option>
                </select>

                <select value={releaseStatus} onChange={e => setReleaseStatus(e.target.value)}>
                    <option value="">전체</option>
                    <option value="출시 중">출시 중</option>
                    <option value="출시 중단">출시 중단</option>
                </select>

                <div className="ms-auto">
                    <button onClick={() => setViewMode("list")}>목록</button>
                    <button onClick={() => setViewMode("image")}>이미지</button>
                </div>
            </div>

            {/* 리스트 뷰 */}
            {viewMode === "list" && (
                <table className="table text-center">
                    <thead>
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
                    {groupedMenus.map(group => (
                        <Fragment key={group.menuCode}>
                            {group.items.map((item, idx) => (
                                <tr key={`${item.menuNo}-${item.size}`}>
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

            {/* 이미지 뷰 */}
            {viewMode === "image" && (
                <div className="row g-3">
                    {groupedMenus.map(group => (
                        <div className="col-6 col-md-3" key={group.menuCode}>
                            <div className="border p-2 text-center">
                                <img src="/images/menu-placeholder.png" />
                                <div className="fw-bold">{group.menuName}</div>
                                {group.items.map(item => (
                                    <div key={item.size}>
                                        {item.size} / {item.menuPrice.toLocaleString()}원
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuListPage;

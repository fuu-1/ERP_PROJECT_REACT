import { useEffect, useMemo, useState } from "react";
import { fetchMenuList } from "../../api/menuApi";
import { groupByMenuCode } from "./utils/MenuGroup";
import MenuList from "./MenuList";
import PageContainer from "../../layout/PageContainer";
import type { Menu } from "types/Menu";

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

    const groupedMenus = useMemo(
        () => groupByMenuCode(menuList),
        [menuList]
    );

    return (
        <PageContainer title="메뉴 조회">
            <MenuList
                groupedMenus={groupedMenus}
                category={category}
                releaseStatus={releaseStatus}
                viewMode={viewMode}
                onChangeCategory={setCategory}
                onChangeReleaseStatus={setReleaseStatus}
                onChangeViewMode={setViewMode}
            />
        </PageContainer>
    );
};

export default MenuListPage;
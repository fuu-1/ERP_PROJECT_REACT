import type { Menu } from "types/Menu";

export interface GroupedMenu {
    menuCode: string;
    menuName: string;
    menuCategory: string;
    releaseStatus: string;
    menuNo: number;
    items: Menu[];
}

export function groupByMenuCode(menuList: Menu[]): GroupedMenu[] {
    const map = new Map<string, GroupedMenu>();

    menuList.forEach(menu => {
        if (!map.has(menu.menuCode)) {
            map.set(menu.menuCode, {
                menuCode: menu.menuCode,
                menuName: menu.menuName,
                menuCategory: menu.menuCategory,
                releaseStatus: menu.releaseStatus,
                menuNo: menu.menuNo,
                items: [],
            });
        }
        map.get(menu.menuCode)!.items.push(menu);
    });

    return Array.from(map.values());
}

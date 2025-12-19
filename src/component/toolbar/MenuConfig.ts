export interface SubMenu {
  label: string;
  path: string;
}

export interface MenuGroup {
  title: string;
  subMenus: SubMenu[];
}

const m = (label: string, path: string = ""): SubMenu => ({
  label,
  path
});

const Menus: MenuGroup[] = [
  {
    title: "매출",
    subMenus: [
      m("매출 조회", "/sales"),
      m("주문 조회", "")
    ]
  },
  {
    title: "품목/재고",
    subMenus: [
      m("품목 조회", ""),
      m("재고 현황", ""),
      m("재고 변동", "")
    ]
  },
  {
    title: "메뉴",
    subMenus: [
      m("메뉴 등록", ""),
      m("메뉴 조회", "/menu")
    ]
  },
  {
    title: "직영점",
    subMenus: [
      m("직영점 목록", "/store")
    ]
  }
];

export default  Menus;
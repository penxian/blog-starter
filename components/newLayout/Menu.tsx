import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

type MenuProps = {
  className?: string;
};

type TreeMenu = {
  name: string;
  key: string;
  children: Array<{
    key: string;
    name: string;
    path: string;
  }>;
};
const TreeMenuData: TreeMenu[] = [
  {
    name: "首页",
    key: "home",
    children: [{ key: "frist", name: "ORC识别", path: "/frist" }]
  },
  {
    name: "会议室",
    key: "meetroom",
    children: [
      { name: "会议室预定", key: "meet", path: "/meet" },
      { name: "会议室列表", key: "meetList", path: "/meetList" }
    ]
  }
];
const Menu = (props: MenuProps) => {
  const router = useRouter();
  const [menuData] = useState<TreeMenu[]>(TreeMenuData);

  const handler = () => {};

  useEffect(() => {
    //nextjs获取路由地址
    console.log(router.pathname);
  }, []);

  const hasActiveChild = useCallback(
    (key) => {
      return router.pathname.substring(1) === key ? "active" : "";
    },
    [router.pathname]
  );

  return (
    <div className={props.className}>
      <ul className="menu bg-base-200 w-56 h-[calc(100vh-4.5rem)]">
        {menuData.map((item) => {
          return (
            <>
              <li className="menu-title">{item.name}</li>
              {item.children.map((child) => {
                return (
                  <li key={child.key} onClick={handler}>
                    <Link
                      className={hasActiveChild(child.key)}
                      href={child.path}
                    >
                      {child.name}
                    </Link>
                  </li>
                );
              })}
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default Menu;

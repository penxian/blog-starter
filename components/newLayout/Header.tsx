const Header = () => {
  return (
    <div className="navbar bg-base-100 border-b-gray-300 border-b">
      <div className="flex-1">
        <a className="font-bold text-xl">工具箱</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>中文</a>
          </li>
          <li>
            <details>
              <summary>熊二不二</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>设置</a>
                </li>
                <li>
                  <a>注销</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

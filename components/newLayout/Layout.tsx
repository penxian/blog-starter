import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Menu className="w-60" />
        {children}
      </div>
    </>
  );
};
export default Layout;
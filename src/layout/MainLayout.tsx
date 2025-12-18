import Toolbar from "../component/toolbar/Toolbar.tsx";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Toolbar />
    <main style={{ paddingTop: "65px" }}>
      {children}
    </main>
  </>
);

export default MainLayout;
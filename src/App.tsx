import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Sales from "./pages/sales/Sales";
import Login from "./pages/Login.tsx";
import MenuListPage from "./pages/menu/MenuListPage.tsx";
import StoreListPage from "./pages/store/StoreListPage.tsx";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/sales" element={<Sales />} />
                <Route path="/store" element={<StoreListPage />} />
                <Route path="/menu" element={<MenuListPage />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </MainLayout>
    );
}

export default App;

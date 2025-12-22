import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Sales from "./pages/sales/Sales";
import Store from "./pages/store/Store";
import Login from "./pages/Login.tsx";
import MenuListPage from "./pages/menu/MenuListPage.tsx";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/sales" element={<Sales />} />
                <Route path="/store" element={<Store />} />
                <Route path="/menu" element={<MenuListPage />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </MainLayout>
    );
}

export default App;

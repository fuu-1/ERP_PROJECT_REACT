import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Sales from "./pages/sales/Sales";
import Store from "./pages/store/Store";
import MenuList from "./pages/menu/MenuList";
import Login from "./pages/Login.tsx";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/sales" element={<Sales />} />
                <Route path="/store" element={<Store />} />
                <Route path="/menu" element={<MenuList />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </MainLayout>
    );
}

export default App;

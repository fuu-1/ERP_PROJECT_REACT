// App.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Sales from "./pages/sales/Sales";
import Store from "./pages/store/Store";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/sales" element={<Sales />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </MainLayout>
  );
}

export default App;

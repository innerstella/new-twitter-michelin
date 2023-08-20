import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import GroupPage from "./pages/group";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/group" element={<GroupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

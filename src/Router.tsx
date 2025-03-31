import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import GroupPage from "./pages/group"
import HotpotPage from "./pages/hotpot"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/hotpot" element={<HotpotPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

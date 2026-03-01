import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GroupPage from './pages/group';
import GroupListPage from './pages/group-list';
import HomePage from './pages/home';
import HotpotPage from './pages/hotpot';
import HotpotDetailPage from './pages/hotpot/detail';
import LogPage from './pages/log';
import RecommendPage from './pages/recommend';
import SmallShopPage from './pages/small-shop';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/group-list" element={<GroupListPage />} />
        <Route path="/group/:name" element={<GroupPage />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/hotpot" element={<HotpotPage />} />
        <Route path="/hotpot/detail/:id" element={<HotpotDetailPage />} />
        <Route path="/smallshop" element={<SmallShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

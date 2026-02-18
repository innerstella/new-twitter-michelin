import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GroupPage from './pages/group';
import GroupListPage from './pages/group-list';
import HomePage from './pages/home';
import RecommendPage from './pages/recommend';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/group-list" element={<GroupListPage />} />
        {/* <Route path="/hotpot" element={<HotpotPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

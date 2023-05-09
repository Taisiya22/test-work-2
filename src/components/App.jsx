import { Route, Routes } from 'react-router-dom';
import SharedLayots from './SharedLayots/SharedLayots';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayots />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
};

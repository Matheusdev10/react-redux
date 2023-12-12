import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Users from '../pages/Users';
import Companies from '../pages/Companies';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/companies" element={<Companies />} />
    </Routes>
  );
}

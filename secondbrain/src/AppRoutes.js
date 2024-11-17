import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './views/Home';
import YourPeers from './views/your_peers';
import YourRole from './views/your_role';
//import YourPDS from './views/YourPDS';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/home" element={<YourRole />} />
        <Route path="/your-peers" element={<YourPeers />} />
        <Route path="/your-role" element={<YourRole />} />
        <Route path="/your-pds" element={<YourRole />} />
      </Routes>

  );
}

export default AppRoutes;
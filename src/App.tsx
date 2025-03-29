import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PlayersPage from "@/pages/players.tsx";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PlayersPage />} path="/players" />
    </Routes>
  );
}

export default App;

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, Dashboard, Presetup } from "./Pages";

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/presetup" element={<Presetup />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;

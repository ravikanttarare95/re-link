import Homepage from "./views/Homepage.tsx";
import ChatPage from "./views/ChatPage.tsx";
import Authentication from "./views/Authentication.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/authenticate" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

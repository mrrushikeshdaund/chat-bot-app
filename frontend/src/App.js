import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route index element={<ChatPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

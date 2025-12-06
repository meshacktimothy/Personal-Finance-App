import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUp";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/view" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      {/* <LoginPage /> */}
    </>
  );
}

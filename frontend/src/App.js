import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";

const MainContainer = ({ children, className }) => {
  return (
    <main className={`${className}`}> {children} </main>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer className={`relative w-screen h-screen bg-[url('../public/assets/images/main-bg.png')] bg-no-repeat bg-cover`}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;

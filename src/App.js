import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingContainer from './Components/container/LandingContainer';
import UserDetailContainer from './Components/container/UserDetailContainer';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingContainer />} />
          <Route path="/:id" element={<UserDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

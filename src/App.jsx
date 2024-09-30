import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Blocks/Home/Home';
import ComponentsAll from "./components/Sidebar/componentsAll";
import PortfolioPage from "./components/Blocks/Portfolio/PortfolioPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/componentsAll" element={<ComponentsAll />} />
                <Route path="/PortfolioPage" element={<PortfolioPage />} />
            </Routes>
        </Router>
    );
};

export default App;

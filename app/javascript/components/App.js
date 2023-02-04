import React from "react";
import { Route, Routes } from "react-router-dom";
import Greeting from './Greeting';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Greeting />} />
            </Routes>
        </div>
    );
};

export default App;

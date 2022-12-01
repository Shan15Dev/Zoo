import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MapsPage from "./pages/MapsPage";
import Animal from "./pages/Animal";

function App() {

    return (
        <div className="App">
            <Router >
            <div id="root">
                <Routes>
                    <Route path="/maps" element={<MapsPage />}></Route>
                    <Route path="/animal" element={<Animal />}></Route>
                </Routes>
            </div>
        </Router>
        </div>
    )
}

export default App

import React from 'react'
// import Header from './components/Header/Header'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
// import './index.css'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SignUp />} />
                <Route path='/dashboard' element= {<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App

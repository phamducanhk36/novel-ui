import './App.css';
import HealthCheck from "./pages/HealthCheck";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={< Home/>}/>
                    <Route exact path='/health' element={< HealthCheck/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

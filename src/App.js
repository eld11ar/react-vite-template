import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
    return (
        <div className='wrapper'>
            <div className='main'>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;

import './App.css';
import Navbar from './component/Navbar';
import Football from './pages/Football';
import Homepage from './pages/Homepage';
import Nba from './pages/Nba';
import {Routes, Route} from 'react-router-dom'
import Retro from './pages/Retro';
import ProductDetail from './pages/ProductDetail';

function App() {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path="/product/football" element={<Football />} />
                <Route path='/nba' element={<Nba />} />
                <Route path='/retro' element={<Retro />} />
                <Route path='/product/football/:id' element={<ProductDetail />}/>
            </Routes>
        </div>
    )
}

export default App;

import './App.css';
import Navbar from './component/Navbar';
import Football from './pages/Football';
import Homepage from './pages/Homepage';
import Nba from './pages/Nba';
import {Routes, Route} from 'react-router-dom'
import Retro from './pages/Retro';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path="/product/football" element={<Football />} />
                <Route path='/product/nba' element={<Nba />} />
                <Route path='/product/retro' element={<Retro />} />
                <Route path='/product/football/:id' element={<ProductDetail />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default App;

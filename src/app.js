import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Checkout from './pages/Home/components/Checkout'
import ProductDetail from './pages/Home/components/ProductDetail'


export default function App() {
    return (
        <BrowserRouter>
            <Link to="/">首頁</Link>
            <Link to="/checkout">購物車</Link>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/product' element={<ProductDetail />} >
                <Route path=':id' element={<ProductDetail />}/>
            </Route>
            <Route path='*' element={<h1>404 找不到頁面</h1>} />
        </Routes>

        </BrowserRouter >
    )
}

import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Page from './pages/Page'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

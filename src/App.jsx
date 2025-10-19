import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Series from "./pages/Series"
import Movies from "./pages/Movies"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

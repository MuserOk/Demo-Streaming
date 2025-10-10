import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Series from "./pages/Series"
import Movies from "./pages/Movies"
import NotFound from "./pages/NotFound"



function App() {


  return (
    <>
      <nav className='flex justify-center gap-10 py-6 text-xs'>
        <Link to="/">Home</Link>
        <Link to="/series">Series</Link>
        <Link to="/movies">Movies</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

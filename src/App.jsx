import './App.scss'
import Home from './components/pages/home/home'
import { Routes, Route } from 'react-router-dom'
import Movie from './components/pages/movie/movie'

function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/card-inner/:movieId' element={<Movie/>} />

      </Routes>
    </>
  )
}

export default App

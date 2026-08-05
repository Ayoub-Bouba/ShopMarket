import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './page/header/Header'
import NewArticle from './page/home/NewArticle'
import Home from './page/home/Home'
import Modifie from './page/home/Modifie'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<NewArticle/>} />
        <Route path='/modie/:id' element={<Modifie/>} />
      </Routes>
    </div>
  )
}

export default App

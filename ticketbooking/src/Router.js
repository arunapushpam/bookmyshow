import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main/Main'
import  Movie  from './Movie/Movie'
const Router = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes >
            <Route path='/' element ={<Main />}></Route>
            <Route path='/Movie/:ids' element ={<Movie />}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main/Main'
import  Movie  from './Movie/Movie';
import Bookticket from './bookticket/bookticket';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes >
            <Route path='/' element ={<Main />}></Route>
            <Route path='/Movie/:ids' element ={<Movie />}></Route>
            <Route path='/bookticket' element={< Bookticket/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router

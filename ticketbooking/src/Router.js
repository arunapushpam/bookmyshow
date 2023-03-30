import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Booktickets from './Bookticket/Booktickets';

import Main from './Main/Main'
import  Movie  from './Movie/Movie';
// import Bookticket from './Bookticket/Bookticket';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes >
            <Route path='/' element ={<Main />}></Route>
            <Route path='/Movie/:ids' element ={<Movie />}></Route>
            <Route path='/bookticket/:ticket' element={< Booktickets/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router

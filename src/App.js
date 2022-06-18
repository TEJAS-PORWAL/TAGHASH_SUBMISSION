import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import SideMenu from './components/Navigation/SideMenu'
import Gmail from './components/Email/Gmail'
import ContactUs from './components/Navigation/ContactUs'
import Navbar from './components/Navigation/Navbar'
// import Email from './components/Email/Email'
import Reminder from './components/Reminder/Reminder'
import ToDo from './components/ToDOList/ToDo'
import AboutUs from './components/Navigation/AboutUs'
import './App.css'

 function App() {
  return (
      <>
      <div className='App'>

      <Navbar/>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/welcome'} />} />
          <Route path={'/email'} element={<Gmail/>} />
          <Route path={'/todo'} element={<ToDo/>} />
          <Route path={'/reminder'} element={<Reminder/>} />
          <Route path={'/reminder'} element={<Reminder/>} />
          <Route path={'/contact+us'} element={<ContactUs/>} />
          <Route path={'/about+us'} element={<AboutUs/>} />
          {/* <Route path={'/about+us'} element={<AboutUs>} /> */}
        </Routes>
        
        {/* <img src='https://img.freepik.com/free-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000' alt='LOADING ERROR' /> */}
        <div className='container mx-3 my-3'>
          
          <p>
            <h3><u> WECOME TO THE DASHBOARD.</u><br/> </h3>
            <br/> <li>THIS IS A VERY INTERACTIVE AND USER FRIENDLY WEBSITE, WHICH IS MADE TO MANAGE YOUR DAILY TASK AT EASE.</li><br/>
            <li>CHECK OUT ALL THE FEAUTRES WE PROVIDE.</li><br/>
            
            </p>
            
        </div>
       
      </div>
      </>
  )
}

export default App


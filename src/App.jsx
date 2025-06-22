import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wrapper from './component/Wrapper'
import Home from './component/Home'
import Sidebar from './component/Sidebar'
import Dashboard from './pages/Dashboard'
import Lenis from '@studio-freight/lenis';
import Insert from './pages/Insert'
import View from './pages/View'
import Update from './pages/Update'
import Delete from './pages/Delete'
import Attendance from './pages/Attendance'
import WhatsappDocs from './pages/WAJugaad'
import Sms from './pages/SmsJugaad'
function App() {

  useEffect(() => {
      const lenis = new Lenis();
  
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
  
      requestAnimationFrame(raf);
    }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Home/><Sidebar/></>} />
          <Route path='/dashboard' element={<Wrapper><Dashboard/></Wrapper>} />
          <Route path='/insert' element={<Wrapper><Insert/></Wrapper>} />
          <Route path='/view' element={<Wrapper><View/></Wrapper>} />
          <Route path='/update' element={<Wrapper><Update/></Wrapper>} />
          <Route path='/delete' element={<Wrapper><Delete/></Wrapper>} />
          <Route path='/attendance' element={<Wrapper><Attendance/></Wrapper>} />
          <Route path='/whatsapp' element={<Wrapper><WhatsappDocs/></Wrapper>} />
          <Route path='/sms' element={<Wrapper><Sms/></Wrapper>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 

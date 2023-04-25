import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout,  Home, Mentorship, CodeSnippetPage, Portfolio} from './Pages'

const App = () => {

  return (
    <div className='bg-primary sm:px-[121px] px-[24px] text-white overflow'>
      {/* Hello */}
      
      <Router>
      
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='/mentorship' element={<Mentorship/>}  />
          <Route path="/snippet" element={<CodeSnippetPage/>} />
          <Route path="/portfolio" element={<Portfolio/>} /> 

        </Route>
      </Routes>
      </Router>

    </div>
  )
}

export default App
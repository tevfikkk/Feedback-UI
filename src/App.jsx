import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
// import FeedbackList from './components/FeedbackList'
// import FeedbackStats from './components/FeedbackStats'
// import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import Feedback from './components/Feedback'

const App = () => {
  return (
    <Router>
      <Header text='Feedback UI' bgColor='red' textColor='blue' />
      {/* */}
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Feedback />
              </>
            }
          />

          <Route path='/about' element={<>{AboutPage}</>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

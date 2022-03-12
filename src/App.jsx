import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import Feedback from './components/Feedback'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback UI' bgColor='red' textColor='blue' />

        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Feedback />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App

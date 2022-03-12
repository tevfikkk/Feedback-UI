import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import Header from './components/Header'
// import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
// import FeedbackStats from './components/FeedbackStats'
// import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import Feedback from './components/Feedback'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header text='Feedback UI' bgColor='red' textColor='blue' />

      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Feedback
                  addFeedback={addFeedback}
                  deleteFeedback={deleteFeedback}
                  feedback={feedback}
                />
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

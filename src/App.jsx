import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Card from './components/shared/Card'
import { FaWindows } from 'react-icons/fa'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <>
      <Header text='Feedback UI' bgColor='red' textColor='blue' />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App

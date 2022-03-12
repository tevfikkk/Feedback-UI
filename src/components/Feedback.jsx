import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import FeedbackForm from './FeedbackForm'
import FeedbackList from './FeedbackList'
import FeedbackStats from './FeedbackStats'
import { useState } from 'react'
import FeedbackData from '../data/FeedbackData'

const Feedback = () => {
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
    <>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  )
}

export default Feedback

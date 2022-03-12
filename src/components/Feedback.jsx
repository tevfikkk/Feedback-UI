import React from 'react'
import FeedbackForm from './FeedbackForm'
import FeedbackList from './FeedbackList'
import FeedbackStats from './FeedbackStats'

const Feedback = ({ addFeedback, feedback, deleteFeedback }) => {
  return (
    <>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  )
}

export default Feedback

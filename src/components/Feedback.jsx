import React from 'react'
import FeedbackForm from './FeedbackForm'
import FeedbackList from './FeedbackList'
import FeedbackStats from './FeedbackStats'

const Feedback = () => {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  )
}

export default Feedback

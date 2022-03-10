import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import React from "react";

// eslint-disable-next-line react/prop-types
const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem

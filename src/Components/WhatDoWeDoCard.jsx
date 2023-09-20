import React from 'react'

const WhatDoWeDoCard = ({ imageUrl, title }) => {
  return (
    <div>
      <div className="What-Do-We-Do-card">
      <img src={imageUrl} alt={title} className="What-Do-We-Do-card-image" />
        <p className="What-Do-We-Do-card-title">{title}</p>
    </div>
    </div>
  )
}

export default WhatDoWeDoCard


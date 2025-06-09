import React from 'react'

const GridBackground = () => {
  return (
<div className="absolute inset-0 opacity-20">
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        </pattern>
        <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
          <stop offset="50%" stopColor="rgba(236, 72, 153, 0.3)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#gridGrad)" />
    </svg>
  </div>
  )
}

export default GridBackground

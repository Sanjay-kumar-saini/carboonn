import React from 'react'

function Leaderboard() {
  return (
    <div className='w-full h-screen'>
      <div className='w-full'>
        <h2>Top Carbon reduction enthusiast :this week</h2>
        <li>A:100gm</li>
        <li>B:210gm</li>
        <li>C:331gm</li>
      </div>
      <div className='w-full'>
      <h2>Top Carbon reduction enthusiast :this month</h2>
        <li>A:400gm</li>
        <li>B:510gm</li>
        <li>C:631gm</li>
      </div>
      <div className='w-full'>

      <h2>Top Carbon reduction enthusiast :this year</h2>
        <li>A:1200gm</li>
        <li>B:2100gm</li>
        <li>C:3231gm</li>

      </div>
    </div>
  )
}

export default Leaderboard

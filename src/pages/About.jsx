import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>

      <p className='mb-4 text-2xl font-light'>
        A React app to search for GitHub user profiles and see profile details. This
        project was create by {' '}
        <a 
          className='text-green-500 underline' 
          href='https://www.caseyrowlands.com' 
          target='_blank' 
          rel="noreferrer"
        >
          CaseyCodes
        </a>
      </p>

      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
    </div>
  )
}

export default About
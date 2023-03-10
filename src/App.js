import React from 'react'
import Intro from './components/Intro';
import Education from './components/Education/Education';
import About from './components/About/about';

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <Education/>
    </div>
  )
}

export default App;
import { useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Aboutme from './Components/Aboutme'
import Project from './Components/Project'
import Footer from './Components/Footer'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
      <Aboutme />
      <Project />
      <Footer />
    </>
  )
}

export default App

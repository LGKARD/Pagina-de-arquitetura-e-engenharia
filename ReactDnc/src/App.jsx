import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//PAGES
import Home from './assets/pages/home'
import About from './assets/pages/about'
import Projects from './assets/pages/projects'
import Contact from './assets/pages/contact'

//UTILS
import ScrollTop from './utils/scrollTop'

function App() {

  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/projects' element={<Projects/>}> </Route>
        <Route path='/contact' element={<Contact/>}> </Route>
      </Routes>
    </Router>
  )
}

export default App

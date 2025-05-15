import { useState } from 'react'
import './App.css'
import Navbarr from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import { Skills } from './components/Skills';
import Project from './components/Project';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import { ScrollProvider } from './components/ScrollContext';
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
     <ScrollProvider>
    <>
    <Navbarr/>
    <Banner/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
    </ScrollProvider>
  )
}

export default App

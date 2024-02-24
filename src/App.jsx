
import  styles from './App.module.css'
import About from './components/About'
import Contact from './components/Contact'
import Exprience from './components/Exprience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {


  return <div className={styles.App}>
  <Navbar/>
  <Hero/>
  <About/>
  <Exprience/>
  <Projects/>
  <Contact/>
  </div>
    
}

export default App

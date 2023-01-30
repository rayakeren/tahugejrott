import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Team } from "./components/Team"
import { Reversewave } from "./components/Reversewave"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  document.title="Tahu Gejrot"
//mess code ever
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Reversewave/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

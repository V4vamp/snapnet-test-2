// import { useState } from 'react'
import { CiTwitter } from "react-icons/ci";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TbBrandMedium } from "react-icons/tb";
import Vector from './assets/nav-vector.png'
import Bro from './assets/bro.png'
import { RxTextAlignRight } from "react-icons/rx";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <nav>
          <div>
            <CiTwitter size={20} color="#92E3A9" />
            <TiSocialFacebookCircular size={20} color="#92E3A9" />
            <TbBrandMedium size={20} color="#92E3A9" />
          </div>
          <div className="logo">
            <img src={Vector} alt="" />
            <h2>Finance</h2>
          </div>
          <RxTextAlignRight size={34} color="#92E3A9" />
        </nav>
        <main>
          <section className="text">
            <h2>Mutual Investment</h2>
            <p>At Finance we care about your future. We help you invest the way you want. So you can relax, have fun and let your fund grow.</p>
            <button>Learn More</button>
          </section>
          
          <section className="image">
<div className="img-container">
  <img src={Bro}alt="" />
</div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

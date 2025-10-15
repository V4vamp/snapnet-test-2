// import { useState } from 'react'
import { CiTwitter } from "react-icons/ci";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TbBrandMedium } from "react-icons/tb";
import Vector from './assets/nav-vector.png'
import { RxTextAlignRight } from "react-icons/rx";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <div>
          <CiTwitter size={40} color="#92E3A9" />
          <TiSocialFacebookCircular size={40} color="#92E3A9" />
          <TbBrandMedium size={40} color="#92E3A9" />
        </div>
        <div>
          <img src={Vector} alt="" />
          <h2>Finance</h2>
        </div>
        <RxTextAlignRight size={34} color="#92E3A9" />
      </nav>
    </div>
  )
}

export default App

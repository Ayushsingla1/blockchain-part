import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Interaction from './components/readFromChain'
import Auth from './components/userAuth'
import Writing from './components/writeToChain'
import BuyMovie from './components/buyMovie'
function App() {

  return (
    <div>
      hello
      <ConnectButton chainStatus="icon" showBalance={false} accountStatus="address"/>
      {/* <Interaction/> */}
      {/* <Auth/> */}
      {/* <Writing/> */}
      {/* <Interaction/> */}
      <BuyMovie/>
    </div>
  )
}

export default App

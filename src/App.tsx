import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Interaction from './components/readFromChain'
import Auth from './components/userAuth'
import Writing from './components/writeToChain'
import BuyMovie from './components/buyMovie'
import Upload from './components/uploadToIpfs'
import PinataVideoUploader from './components/uploadToIpfs'
function App() {

  return (
    <div>
      hello
      <ConnectButton chainStatus="icon" showBalance={false} accountStatus="address"/>
      {/* <Interaction/> */}
      {/* <Auth/> */}
      {/* <Writing/> */}
      {/* <Interaction/> */}
      <PinataVideoUploader/>
      {/* <BuyMovie/> */}
    </div>
  )
}

export default App

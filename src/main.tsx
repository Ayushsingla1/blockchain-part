import { createRoot } from 'react-dom/client'
import WalletProvider from './utils/walletProvider.tsx'
import { RecoilRoot } from 'recoil';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <WalletProvider>
      <App />
  </WalletProvider>
)

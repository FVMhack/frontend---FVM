import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const Filecoin = {
  id: 3141,
  name: "Filecoin-Hyperspace",
  network: "Filecoin",
  iconUrl: "https://cryptologos.cc/logos/filecoin-fil-logo.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "tFil",
    symbol: "tFil",
  },
  rpcUrls: {
    default: { http: ["https://filecoin-hyperspace.chainstacklabs.com/rpc/v0"] },
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://hyperspace.filscan.io/" },
    etherscan: { name: "SnowTrace", url: "https://hyperspace.filscan.io/" },
  },
  testnet: true,
};


const { chains, provider } = configureChains(
  [Filecoin,mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: "Mo8ZJH2tRsayTK7UZuw2yO4QJBDuMJvs" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </RainbowKitProvider>
    </WagmiConfig>
)

import { useEffect } from 'react'

import './App.css'

// let web3: Web3;
// if (window.ethereum) {
//    web3 = new Web3(window.ethereum);
//    // Ask User permission to connect to Metamask
//    await window.ethereum.enable();
// };

function App() {


  useEffect(()=> {
    const loadProvider = async () => {
      // with MetaMask we have an access to window.ethereum & to wndow.web3
      // metamask injexts a global API into website
      // this API allows websites to request user, account read data to blockchain
      // sign messages and transactions

      console.log(window.web3)
      console.log(window.ethereum)

    }
    loadProvider()
  },[])

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="balance-view-is-size-2">
            Current Balance: <strong>10</strong> ETH
          </div>
          <button 
          className="btn mr-2"
          onClick={async ()=> {
            const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
            console.log(accounts)
          }}
          >
            Enable Ethereum
          </button>
          <button className="btn mr-2">Donate</button>
          <button className="btn">Withdraw</button>
        </div>
      </div>
    </>
  )
}

export default App

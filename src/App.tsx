
import { useEffect, useState } from 'react'
import Web3 from 'web3'


import './App.css'

// if (window.ethereum) {
//    web3 = new Web3(window.ethereum);
//    // Ask User permission to connect to Metamask
//    await window.ethereum.enable();
// };
type Web3APi = {
  provider: null;
  web3: null;
}

function App() {
  const [web3Api,setWeb3Api] = useState<Web3APi>({
    provider: null,
    web3:null,
  })

  useEffect(()=> {
    const loadProvider = async () => {
      // with MetaMask we have an access to window.ethereum & to wndow.web3
      // metamask injexts a global API into website
      // this API allows websites to request user, account read data to blockchain
      // sign messages and transactions
      let provider = null

      if(window.ethereum){
        provider = window.ethereum

        try {
          await provider.enable();
        }catch(e){
          console.error("User denied accounts access" + e)
        }
      }
      else if(window.web3){
        provider =window.web3.currentProvider
      }
      else if (!import.meta.env.VITE_production){
        provider = new Web3.providers.HttpProvider("http://localhost:7545")
      }

     setWeb3Api({
       web3: new Web3(provider),
       provider
     })

    }
    loadProvider()
  },[])

  //console
  console.log(web3Api.web3)

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="balance-view-is-size-2">
            Current Balance: <strong>10</strong> ETH
          </div>
         
          <button className="btn mr-2">Donate</button>
          <button className="btn">Withdraw</button>
        </div>
      </div>
    </>
  )
}

export default App

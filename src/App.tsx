
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import dotenv from 'dotenv'
dotenv.config()

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

  const [account,setAccount] = useState(null) 

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
  //useEffect
  useEffect(()=> {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts()
      setAccount(accounts[0])

    }
    web3Api.web3 && getAccount()
  },[web3Api.web3])

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <span>
            <strong>Account: </strong>
          </span>
          <h1>
            {account ? account : "not connected"}
          </h1>
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

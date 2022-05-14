
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import {loadContract} from './utils/load-contract'

import './App.css'

// if (window.ethereum) {
//    web3 = new Web3(window.ethereum);
//    // Ask User permission to connect to Metamask
//    await window.ethereum.enable();

// };
type Web3APi = {
  provider: any;
  web3: any;
  contract: any;
}

function App() {
  const [web3Api,setWeb3Api] = useState<Web3APi>({
    provider: null,
    web3:null,
    contract:null,
  })

  const [account,setAccount] = useState<string | null>(null) 

  useEffect(()=> {
    const loadProvider = async () => {
      const provider : any = await detectEthereumProvider()
      const contract = await loadContract("Faucet",provider)
      // const contract = await loadContract("Faucet")

      if(provider) {
        // provider.request({method: "eth_requestAccounts"})
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        })
      }else {
        console.error("Please, install Metamask")
      }

      // with MetaMask we have an access to window.ethereum & to wndow.web3
      // metamask injexts a global API into website
      // this API allows websites to request user, account read data to blockchain
      // sign messages and transactions
      

      

    

    }
    loadProvider()
  },[])

  //console
  // console.log(web3Api.web3)
  //useEffect
  useEffect(()=> {
    const getAccount = async ():Promise<void> => {
      const accounts = await web3Api.web3.eth.getAccounts()
      return setAccount(accounts[0])

    }
    web3Api.web3 && getAccount()
  },[web3Api.web3])

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="is-flex is-align-items-center">
          <span>
            <strong className="mr-2">Account: </strong>
          </span>
          
            {
            account ?
           <div>{account}</div> : 
            <button 
            className="button is-small"
            onClick={()=>
              web3Api.provider.request({method: "eth_requestAccounts"}
              )}
            >
              Connect Wallet
            </button>
            
            }
            
          </div>
          <div className="balance-view-is-size-2 my-4">
            Current Balance: <strong>10</strong> ETH
          </div>
         
          <button 
            className="button is-link mr-2 is-small">Donate
            </button>
          <button 
          className="button is-primary is-small">Withdraw
          </button>
        </div>
      </div>
    </>
  )
}

export default App

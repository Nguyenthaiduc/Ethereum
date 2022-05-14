  /// <reference path="../../node_modules/@truffle/contract/typings/index.d.ts" />
  import * as contract from "@truffle/contract"

 
// import contract from "@truffle/contract"


export const loadContract = async (name : string,provider : any) => {
    const res =  await fetch(`/contracts/${name}.json`)
    const Aritfact =  await res.json()
    const _contract = contract(Aritfact)
    _contract.setProvider(provider)

    const deployedContract = await _contract.deployed()

    return  _contract
  
}
export const loadContract2 = () => {

}
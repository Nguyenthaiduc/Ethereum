
import contract from '@truffle/contract'

export const loadContract = async (name : string) => {
    const res =  await fetch(`/contracts/${name}.json`)
    const Aritfact =  await res.json()

    return  contract(Aritfact)
  
}
export const loadContract2 = () => {

}